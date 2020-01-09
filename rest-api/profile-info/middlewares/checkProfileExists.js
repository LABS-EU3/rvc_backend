const dbProfile = require('../models/profile-info-models')

const dbUser = require('../../user/models/user-models')

module.exports = { checkProfileExists }

async function checkProfileExists(req, res, next) {
    const profile = await dbProfile.findProfileByUserId(req.decoded.sub);
    const user = await dbUser.getUserById(req.decoded.sub);
    if (!profile && req.method === 'PUT') {
        res.json(user.username + ' does not have a profile');
    }
    else if (profile && req.method === 'POST') { 
        res.json(user.username + ' already has a profile');
    }
    else {
        next();
    }
}