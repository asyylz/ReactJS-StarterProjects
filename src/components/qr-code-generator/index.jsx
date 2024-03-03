import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './styles.css'
export default function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrcode() {
    setQRCode(input);
    setInput('');
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={e => setInput(e.target.value)}
          type="text"
          value={input}
          name="qr-code"
          placeholder="Enter yur value here"
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrcode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='#fff'/>
      </div>
    </div>
  );
}
