const yt_base = 'https://youtube.googleapis.com/youtube/v3';

const basic_fetch = async (endpoint) => {
    const req = await fetch(`${yt_base}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getSearchTitle : async (text) => {
        return await basic_fetch(`/search?part=snippet&maxResults=1&order=relevance&q=${text}&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
    },
    getSearchId : async (id) => {
        return await basic_fetch(`/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
    },
    getPlaylistItems : async (id) => {
        return await basic_fetch(`/playlistItems?part=contentDetails&playlistId=${id}&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
    }
}