const express = require('express');
const app = express();

// Use Railway's dynamic environment port, or fallback to 5000 for local testing
const PORT = process.env.PORT || 5000;

// Enable CORS so your streaming website frontend can fetch data without being blocked
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 1. 🥊 WWE / WRESTLING ENDPOINT
app.get('/api/wrestling', (req, res) => {
    res.json({
        success: true,
        category: 'wrestling',
        type: 'embed',
        url: 'https://www.dailymotion.com/embed/video/xac03pg?autoplay=1&ui-theme=dark&controls=1'
    });
});

// 2. 🎬 MOVIES ENDPOINT
app.get('/api/movies', (req, res) => {
    res.json({
        success: true,
        category: 'movies',
        type: 'hls',
        proxyUrl: 'https://filmuembed.epic94393.workers.dev/proxy/m3u8',
        targetUrl: 'https://orion.hydrostorm.workers.dev/file1/571691fc348b13611028bcee78a2069d902c338f83ee74b66ddc1fd482f903bc/480p/playlist.m3u8',
        headers: {
            "Origin": "https://vidrock.ru",
            "Referer": "https://vidrock.ru/"
        },
        combinedUrl: 'https://filmuembed.epic94393.workers.dev/proxy/m3u8?url=https%3A%2F%2Forion.hydrostorm.workers.dev%2Ffile1%2F571691fc348b13611028bcee78a2069d902c338f83ee74b66ddc1fd482f903bc%2F480p%2Fplaylist.m3u8&headers=%7B%22Origin%22%3A%22https%3A%2F%2Fvidrock.ru%22%2C%22Referer%22%3A%22https%3A%2F%2Fvidrock.ru%2F%22%7D'
    });
});

// 3. 📺 TV SHOWS ENDPOINT
app.get('/api/tvshows', (req, res) => {
    res.json({
        success: true,
        category: 'tvshows',
        type: 'hls',
        proxyUrl: 'https://filmuembed.epic94393.workers.dev/proxy/m3u8',
        targetUrl: 'https://storrrrrrm.site/stream/9f981d60723f1cae/692p.m3u8',
        headers: {
            "Origin": "https://vidrock.ru",
            "Referer": "https://vidrock.ru/"
        },
        combinedUrl: 'https://filmuembed.epic94393.workers.dev/proxy/m3u8?url=https%3A%2F%2Fstorrrrrrm.site%2Fstream%2F9f981d60723f1cae%2F692p.m3u8&headers=%7B%22Origin%22%3A%22https%3A%2F%2Fvidrock.ru%22%2C%22Referer%22%3A%22https%3A%2F%2Fvidrock.ru%2F%22%7D'
    });
});

// 4. 💮 ANIME ENDPOINT
app.get('/api/anime', (req, res) => {
    res.json({
        success: true,
        category: 'anime',
        type: 'api-gateway',
        gatewayUrl: 'https://megaplay.buzz/stream/getSourcesNew?id=174778&id=174778',
        cdnTarget: 'https://dump.nekostream.site/'
    });
});

// 5. ⚽ SPORTS ENDPOINT
app.get('/api/sports', (req, res) => {
    res.json({
        success: true,
        category: 'sports',
        type: 'hls-live',
        decrypter: 'https://embedstreams.top/js/wasm/lock.js',
        baseUrl: 'https://lb8.streami.su/secure/',
        streamPath: '/rtmp/stream/streamed-willow2_720/1/playlist.m3u8'
    });
});

// Start listening for connections
app.listen(PORT, () => {
    console.log(`🚀 Master Scraper Engine successfully active on port ${PORT}`);
});
