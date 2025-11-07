import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import QrCodeScanner from './components/QrCodeScanner'

function App() {
  const [value, setValue] = useState('100')


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
      
      {/* QR Code Display */}
      <div style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <QRCodeSVG value={value} width={250} height={250}/>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '250px',
            border: '2px solid #ccc',
            borderRadius: '5px'
          }}
          placeholder="Enter text or URL"
        />
      </div>

      {/* Scanner Section */}


      {/* Scanned Result Display */}

      <QrCodeScanner />
    </div>
  )
}

export default App
