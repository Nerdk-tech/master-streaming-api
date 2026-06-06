const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// FULL DYNAMIC HOMEPAGE CATALOG DATA (Movies, TV, Anime, Multi-Sports, Wrestling List)
app.get('/api/catalog', (req, res) => {
    res.json({
        success: true,
        movies: [
            { id: "m1", title: "Office Romance", rating: "6.9", year: "2026", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500" },
            { id: "m2", title: "Spider-Man: Beyond the Spider-Verse", rating: "9.0", year: "2026", poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500" },
            { id: "m3", title: "Dune: Part Two", rating: "8.8", year: "2024", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500" }
        ],
        tvshows: [
            { 
                id: "tv1", 
                title: "The Last of Us", 
                rating: "8.8", 
                year: "2025", 
                poster: "https://images.unsplash.com/photo-1568910748155-01ca989dbfa6?w=500",
                episodes: [
                    { number: 1, title: "When You're Lost in the Darkness" },
                    { number: 2, title: "Infected" },
                    { number: 3, title: "Long, Long Time" }
                ]
            },
            { 
                id: "tv2", 
                title: "House of the Dragon", 
                rating: "8.5", 
                year: "2024", 
                poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500",
                episodes: [
                    { number: 1, title: "A Son for a Son" },
                    { number: 2, title: "Rhaenyra the Cruel" }
                ]
            }
        ],
        anime: [
            { 
                id: "a1", 
                title: "Demon Slayer: Infinity Castle", 
                rating: "9.2", 
                year: "2026", 
                poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500",
                episodes: [
                    { number: 1, title: "The Gathering" },
                    { number: 2, title: "Infiltrating the Castle" }
                ]
            }
        ],
        wrestling: [
            { id: "w1", title: "WWE SmackDown (Latest Full Show)", event: "SmackDown", duration: "2h 00m", embedId: "xac03pg" },
            { id: "w2", title: "WWE Raw Match Highlights", event: "RAW", duration: "45m", embedId: "xac03pg" },
            { id: "w3", title: "WWE NXT Division Special", event: "NXT", duration: "1h 30m", embedId: "xac03pg" }
        ],
        sports: [
            { id: "s1", type: "Football", match: "Chelsea vs Arsenal", league: "Premier League", time: "16:00 UTC", status: "Upcoming" },
            { id: "s2", type: "Basketball", match: "LA Lakers vs Boston Celtics", league: "NBA Finals", time: "01:30 UTC", status: "Upcoming" },
            { id: "s3", type: "Cricket", match: "India vs Australia", league: "T20 World Cup", time: "09:00 UTC", status: "Upcoming" },
            { id: "s4", type: "Combat", match: "UFC Main Event Title Fight", league: "UFC 315", time: "03:00 UTC", status: "Upcoming" }
        ]
    });
});

// RAW STREAMING PIPELINES
app.get('/api/wrestling', (req, res) => {
    res.json({ success: true, category: 'wrestling', type: 'embed', url: 'https://www.dailymotion.com/embed/video/xac03pg?autoplay=1&ui-theme=dark&controls=1' });
});

app.get('/api/movies', (req, res) => {
    res.json({ success: true, category: 'movies', type: 'hls', combinedUrl: 'https://filmuembed.epic94393.workers.dev/proxy/m3u8?url=https%3A%2F%2Forion.hydrostorm.workers.dev%2Ffile1%2F571691fc348b13611028bcee78a2069d902c338f83ee74b66ddc1fd482f903bc%2F480p%2Fplaylist.m3u8&headers=%7B%22Origin%22%3A%22https%3A%2F%2Fvidrock.ru%22%2C%22Referer%22%3A%22https%3A%2F%2Fvidrock.ru%2F%22%7D' });
});

app.get('/api/tvshows', (req, res) => {
    res.json({ success: true, category: 'tvshows', type: 'hls', combinedUrl: 'https://filmuembed.epic94393.workers.dev/proxy/m3u8?url=https%3A%2F%2Fstorrrrrrm.site%2Fstream%2F9f981d60723f1cae%2F692p.m3u8&headers=%7B%22Origin%22%3A%22https%3A%2F%2Fvidrock.ru%22%2C%22Referer%22%3A%22https%3A%2F%2Fvidrock.ru%2F%22%7D' });
});

app.get('/api/anime', (req, res) => {
    res.json({ success: true, category: 'anime', type: 'api-gateway', gatewayUrl: 'https://megaplay.buzz/stream/getSourcesNew?id=174778&id=174778', cdnTarget: 'https://dump.nekostream.site/' });
});

app.get('/api/sports', (req, res) => {
    res.json({ success: true, category: 'sports', type: 'hls-live', targetUrl: 'https://lb8.streami.su/secure/rtmp/stream/streamed-willow2_720/1/playlist.m3u8' });
});

app.listen(PORT, () => console.log(`🚀 Master Scraper Catalog Engine active on port ${PORT}`));
