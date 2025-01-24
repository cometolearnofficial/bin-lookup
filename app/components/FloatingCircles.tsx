export default function FloatingCircles() {
  return (
    <div className="floating-circles">
      <div
        className="floating-circle"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          width: "400px",
          height: "400px",
          top: "10%",
          right: "15%",
        }}
      />
      <div
        className="floating-circle"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)",
          width: "300px",
          height: "300px",
          top: "60%",
          left: "10%",
        }}
      />
      <div
        className="floating-circle"
        style={{
          background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
          width: "250px",
          height: "250px",
          top: "30%",
          left: "30%",
        }}
      />
    </div>
  )
}

