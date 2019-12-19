const db = require('../../../database/dbConfig')

module.exports = {
    findAllVideos,
    findVideoBy,
    addVideo
}

async function findAllVideos() {
    const videos = await db('videos');
    return videos;
}

async function findVideoBy(info) {
    const video = await db('videos')
        .where({ id: info })
        .orWhere({ url: info });
    return video;
}

async function addVideo(url) {
    const [video] = await db('videos').returning('*').insert(url);
    return video;
}