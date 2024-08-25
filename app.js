const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let jsonData;

// Set up CORS options
const corsOptions = {
    origin: '*',
    methods: ['GET'], // Should be an array
    allowedHeaders: ['Content-Type'], // Should be an array
};

// Set up route to proxy the NSE India API request

     myfun(); // Ensure jsonData is set
        
async function myfun() {
    try {
        const response = await fetch('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY', {
            headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
                'Connection': 'keep-alive',
            }
        });

        const data = await response.text();
        jsonData = JSON.parse(data);

        console.log(jsonData);
        // Removed undefined variable `symbol` from `console.log`

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});
