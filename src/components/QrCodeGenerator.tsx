import { QRCodeSVG } from "qrcode.react";

function QrCodeGenerator() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <QRCodeSVG
          key={index}
          value={`${index}`}
          width={800}
          height={800}
          style={{ margin: "40px" }}
          imageSettings={{
            src: "/logo.jpg",
            height: 20,
            width: 20,
            excavate: true,
          }}
        />
      ))}
    </div>
  );
}

export default QrCodeGenerator;
