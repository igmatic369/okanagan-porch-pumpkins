import { useContent } from "../hooks/useContent";

export function AnnouncementBanner() {
  const content = useContent();
  const { announcement } = content;

  return (
    <div className="bg-orange-600 text-white py-3 px-4 text-center">
      <p
        className="text-sm sm:text-base"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        🍁{" "}
        <strong data-content-key="announcement.bold">{announcement.bold}</strong>{" "}
        <span data-content-key="announcement.text">{announcement.text}</span>{" "}
        <a
          href="/packages"
          className="underline hover:text-amber-200 transition-colors ml-1"
          data-content-key="announcement.cta"
        >
          {announcement.cta}
        </a>
        {" "}🍁
      </p>
    </div>
  );
}
