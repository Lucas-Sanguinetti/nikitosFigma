const COORDS = { top: "38%", left: "47%" };

export function ContactMap() {
  return (
    <div style={{ 
      height: "521px", 
      width: "831px", 
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
    }}>
      <img
        src="/images/maps/mapContacto.png"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        draggable={false}
      />

      <div style={{
        position: "absolute",
        top: COORDS.top,
        left: COORDS.left,
        transform: "translate(-50%, -100%)",
        width: "60px",
        height: "70px",
        pointerEvents: "none",
      }}>
        <svg viewBox="0 0 60 70" style={{ position: "absolute", top: 65, left: 15, width: "100%", height: "100%" }}>
          <path d="M30 0 C13.4 0 0 13.4 0 30 C0 46.6 30 70 30 70 C30 70 60 46.6 60 30 C60 13.4 46.6 0 30 0Z"
                fill="#F5A623"/>
          <circle cx="30" cy="28" r="22" fill="white"/>
        </svg>
        <img
          src="/images/logo.png"
          style={{ position: "absolute", width: "38px", height: "38px", top: "74px", left: "26px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}