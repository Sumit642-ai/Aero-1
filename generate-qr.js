const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Generate QR code for upload materials
const uploadUrl = 'https://aerospace-upload.com'; // Replace with your actual upload URL

QRCode.toFile(path.join(__dirname, 'public', 'qr-code.png'), uploadUrl, {
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  },
  width: 200,
  margin: 2,
  errorCorrectionLevel: 'M'
}, function(err) {
  if (err) {
    console.error('Error generating QR code:', err);
  } else {
    console.log('QR code generated successfully at public/qr-code.png');
  }
}); 