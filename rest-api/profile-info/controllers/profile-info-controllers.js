const db = require('../models/profile-info-models')

module.exports = {
  getAllProfiles,
  getProfileByUserId,
  createProfile,
  editProfile
};

async function getAllProfiles(req, res) {
  try {
    const profiles = await db.findAllProfiles();
    if (profiles.length) {
      res.status(200).json(profiles);      
    }
    else {
      res
        .status(404)
        .json({ message: 'There are no saved profiles' })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the saved profiles',
        error
      });
  }
}

async function getProfileByUserId(req, res) {
  try {
    const profile = await db.findProfileByUserId(req.decoded.sub);
    if (profile) {
      res.status(200).json(profile);      
    } else {
      res
        .status(404)
        .json({
          message: 'There is no profile for the user'
        })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the saved profile',
        error
      });
  }
}

async function createProfile(req, res) {
  const profileDetails = { ...req.body, user_id: req.decoded.sub };
  try {
    const newProfile = await db.addProfile(profileDetails);
    res
      .status(201)
      .json(newProfile)
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error creating the user profile', error
      })
  }
}

async function editProfile(req, res) {
  const profileDetails = { ...req.body, user_id: req.decoded.sub };
  try {
    const updatedProfile = await db.updateProfile(req.decoded.sub, profileDetails);
    res
      .status(200)
      .json(updatedProfile)
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error updating the user profile', error
      })
  }
}