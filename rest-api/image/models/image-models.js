const db = require('../../../database/dbConfig')

module.exports = {
    findAllImages,
    findImageBy,
    addImage
}

async function findAllImages() {
    const images = await db('images');
    return images;
}

async function findImageBy(info) {
    const image = await db('images')
        .where({ id: info })
        .orWhere({ url: info });
    return image;
}

async function addImage(url) {
    const [image] = await db('images').returning('*').insert(url);
    return image;
}