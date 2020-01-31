const db = require('../../../database/dbConfig');

module.exports = {
  findAllProfiles,
  findProfileByUserId,
  addProfile,
  updateProfile
};

async function findAllProfiles() {
  const profiles = await db('profile_info');
  return profiles;
}

async function findProfileByUserId(id) {
  const [profile] = await db('profile_info').where({ user_id: id });
  return profile;
}

async function addProfile(profileDetails) {
  const [profile] = await db('profile_info')
    .returning('*')
    .insert(profileDetails);
  return profile;
}

async function updateProfile(id, profileDetails) {
  const [updatedProfile] = await db('profile_info')
    .where({ user_id: id })
    .returning('*')
    .update(profileDetails);
  return updatedProfile;
}
