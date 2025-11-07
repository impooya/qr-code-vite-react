import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
function QrCodeScanner() {
  const [scannedResult, setScannedResult] = useState<string>("");
  return (
    <div>
      <h1>QrCodeScanner</h1>
      <Scanner
        onScan={(result) => console.log(result)}
        onError={(error) => console.log(error)}
        constraints={{
          facingMode: "environment",
        }}
      />
      <p>{scannedResult}</p>
    </div>
  );
}

export default QrCodeScanner;
