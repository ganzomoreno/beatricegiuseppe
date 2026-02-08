import baroqueFrame from "@/assets/baroque-frame.png";

const SiteFrame = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Left border - smaller on mobile to not cover content */}
      <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-12 md:w-20 lg:w-28 opacity-30 sm:opacity-40 md:opacity-50">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${baroqueFrame})`,
            backgroundSize: "300% auto",
            backgroundPosition: "left center",
            backgroundRepeat: "repeat-y",
          }}
        />
      </div>
      {/* Right border */}
      <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-12 md:w-20 lg:w-28 opacity-30 sm:opacity-40 md:opacity-50">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${baroqueFrame})`,
            backgroundSize: "300% auto",
            backgroundPosition: "right center",
            backgroundRepeat: "repeat-y",
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </div>
  );
};

export default SiteFrame;
