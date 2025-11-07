import { QRCodeSVG } from 'qrcode.react'



function App() {


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      gap: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ margin: '0' }}>QR Code Generator & Scanner</h1>
      {
        Array.from({ length: 100 }).map((_, index) => (
          <QRCodeSVG key={index} value={`${index}`} width={800} height={800} style={{ margin: '40px' }} />
        ))
      }
    </div>
  );
}

export default App;
