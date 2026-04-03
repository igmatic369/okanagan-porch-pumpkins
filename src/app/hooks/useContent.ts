import { useReducer, useEffect } from 'react'
import staticContent from '../../content.json'

// Extend window type for the preview bridge global
declare global {
  interface Window {
    __PREVIEW_CONTENT__?: typeof staticContent
  }
}

/**
 * Returns content.json data.
 *
 * In preview mode the portal keeps window.__PREVIEW_CONTENT__ up to date
 * via postMessage. We read it directly on every render rather than caching
 * it in useState — this ensures components that mount AFTER a content update
 * (e.g. on React Router navigation) always get the latest value without
 * needing to wait for another preview-content-changed event.
 *
 * The useReducer is used only to trigger re-renders when the bridge
 * dispatches 'preview-content-changed' so existing components update too.
 */
export function useContent() {
  const [, forceUpdate] = useReducer((n: number) => n + 1, 0)

  useEffect(() => {
    window.addEventListener('preview-content-changed', forceUpdate)
    return () => window.removeEventListener('preview-content-changed', forceUpdate)
  }, [])

  return window.__PREVIEW_CONTENT__ ?? staticContent
}
