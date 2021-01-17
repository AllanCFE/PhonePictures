import api_keys from './private/api_key.json'
const yt_key = api_keys.youtube;
const yt_base = 'https://youtube.googleapis.com/youtube/v3';

const basic_fetch = async (endpoint) => {
    const req = await fetch(`${yt_base}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getSearchTitle : async (text) => {
        return await basic_fetch(`/search?part=snippet&maxResults=1&order=relevance&q=${text}&key=${yt_key}`);
    },
    getSearchId : async (id) => {
        return await basic_fetch(`/videos?part=snippet&id=${id}&key=${yt_key}`);
    },
    getPlaylistItems : async (id) => {
        return await basic_fetch(`/playlistItems?part=contentDetails&playlistId=${id}&key=${yt_key}`)
    }
}