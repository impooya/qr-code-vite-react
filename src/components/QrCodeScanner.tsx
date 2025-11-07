import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

interface ScanResult {
  rawValue: string;
}

function QrCodeScanner() {
  const [scannedResult, setScannedResult] = useState<string>("");
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const handleScan = (result: ScanResult[] | null) => {
    if (result && result.length > 0) {
      console.log(result);
      setScannedResult(result[0].rawValue);
      setIsCameraOpen(false);
    }
  };

  const handleError = (error: unknown) => {
    console.error(error);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl font-bold">QR Code Scanner</h1>

      {!isCameraOpen ? (
        <button
          onClick={() => setIsCameraOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        >
          فعال‌سازی دوربین
        </button>
      ) : (
        <div className="w-[200px] h-[200px]">
          <Scanner
            onScan={handleScan}
            onError={handleError}
            constraints={{
              facingMode: "environment",
            }}
            styles={{
              container: {
                width: "400px",
                height: "400px",
              },
            }}
          />
          <button
            onClick={() => setIsCameraOpen(false)}
            className="bg-red-500 text-white mt-2 px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            بستن دوربین
          </button>
        </div>
      )}

      {scannedResult && (
        <div className="text-green-700 font-medium p-4 bg-green-50 rounded-lg max-w-sm break-all">
          <p className="mb-2">نتیجه اسکن:</p>
          {scannedResult.startsWith("http://") ||
          scannedResult.startsWith("https://") ? (
            <a
              href={scannedResult}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {scannedResult}
            </a>
          ) : (
            <span>{scannedResult}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default QrCodeScanner;
