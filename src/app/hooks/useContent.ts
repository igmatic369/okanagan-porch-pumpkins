import { useState, useEffect } from 'react'
import staticContent from '../../content.json'

// Extend window type for the preview bridge global
declare global {
  interface Window {
    __PREVIEW_CONTENT__?: typeof staticContent
  }
}

/**
 * Returns content.json data.
 * In preview mode (?preview=true), the portal sends updated content via
 * postMessage → preview-bridge.js stores it in window.__PREVIEW_CONTENT__
 * and dispatches 'preview-content-changed'. This hook listens and re-renders.
 * Outside preview mode, always returns staticContent with zero overhead.
 */
export function useContent() {
  const [content, setContent] = useState<typeof staticContent>(
    () => window.__PREVIEW_CONTENT__ ?? staticContent
  )

  useEffect(() => {
    function handler() {
      setContent(window.__PREVIEW_CONTENT__ ?? staticContent)
    }
    window.addEventListener('preview-content-changed', handler)
    return () => window.removeEventListener('preview-content-changed', handler)
  }, [])

  return content
}
