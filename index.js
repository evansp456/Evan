const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  // Ambil IP asli (support Render / proxy)
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.socket.remoteAddress;

  console.log('====================');
  console.log('LINK DIKLIK!');
  console.log('IP USER :', ip);
  console.log('WAKTU   :', new Date().toLocaleString());
  console.log('====================');

  res.send('Halo! Link berhasil dibuka.');
});

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});