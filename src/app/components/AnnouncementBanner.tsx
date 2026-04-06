import { useContent } from "../hooks/useContent";

export function AnnouncementBanner() {
  const content = useContent();
  const { announcement } = content;

  return (
    <div className="bg-orange-600 text-white py-3 px-4 text-center">
      <p
        data-content-key="announcement.text"
        className="text-sm sm:text-base"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {announcement.text}
      </p>
    </div>
  );
}
