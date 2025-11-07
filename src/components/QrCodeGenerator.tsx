import { QRCodeSVG } from "qrcode.react";

function QrCodeGenerator() {
  const toPersianNumber = (num: number): string => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num
      .toString()
      .split("")
      .map((digit) => persianDigits[parseInt(digit)])
      .join("");
  };
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
        <div
          key={index}
          style={{
            position: "relative",
            display: "inline-block",
            margin: "40px",
          }}
        >
          <QRCodeSVG value={`${index}`} width={800} height={800} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px 30px",
              borderRadius: "8px",
              fontSize: "48px",
              fontWeight: "bold",
              fontFamily: "Vazir, sans-serif",
              color: "#000",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {toPersianNumber(index)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default QrCodeGenerator;
