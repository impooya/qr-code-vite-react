import { Link } from "react-router";

function Main() {
  return (
    <div>
      <Link to="/qr-code-generator">QR Code Generator</Link>
      <br />
      <Link to="/qr-code-scanner">QR Code Scanner</Link>
    </div>
  );
}

export default Main;
