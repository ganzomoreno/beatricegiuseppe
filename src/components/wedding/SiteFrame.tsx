import baroqueFrame from "@/assets/baroque-frame.png";

const SiteFrame = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Left border */}
      <div className="absolute top-0 left-0 bottom-0 w-12 md:w-16 lg:w-20 opacity-15">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${baroqueFrame})`,
            backgroundSize: "200% auto",
            backgroundPosition: "left center",
            backgroundRepeat: "repeat-y",
          }}
        />
      </div>
      {/* Right border */}
      <div className="absolute top-0 right-0 bottom-0 w-12 md:w-16 lg:w-20 opacity-15">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${baroqueFrame})`,
            backgroundSize: "200% auto",
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
