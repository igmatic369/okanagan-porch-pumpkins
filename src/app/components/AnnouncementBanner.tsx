export function AnnouncementBanner() {
  return (
    <div className="bg-orange-600 text-white py-3 px-4 text-center">
      <p
        className="text-sm sm:text-base"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        🍁{" "}
        <strong>Fall 2026 orders are now open!</strong>{" "}
        Delivery begins September 21st — spots fill up fast!{" "}
        <a
          href="/packages"
          className="underline hover:text-amber-200 transition-colors ml-1"
        >
          Reserve yours today →
        </a>
        {" "}🍁
      </p>
    </div>
  );
}