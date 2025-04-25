// debug.js

const axios = require('axios');

(async () => {
  try {
    // Try both with and without trailing slash:
    const urls = [
      'https://kofuku-idealabs.onrender.com/encrypt',
      'https://kofuku-idealabs.onrender.com/encrypt/'
    ];

    for (const url of urls) {
      try {
        const res = await axios.get(url);
        console.log(`✅ Success (${url}):`, res.status, res.data);
      } catch (err) {
        console.error(`❌ Error (${url}):`, err.response?.status, err.response?.data || err.message);
      }
    }
  } catch (err) {
    console.error('Unexpected Error:', err.message);
  }
})();
