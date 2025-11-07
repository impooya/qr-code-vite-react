import Main from './components/Main'
import QrCodeGenerator from './components/QrCodeGenerator'
import { Routes, Route } from 'react-router'
import QrCodeScanner from './components/QrCodeScanner'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
      <Route path="/qr-code-scanner" element={<QrCodeScanner />} />
    </Routes>
  )
}

export default App

