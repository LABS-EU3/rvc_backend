const db = require("../../../database/dbConfig");

async function checkExistingEmail(req, res, next) {
    const email = req.body.email;

    try {
        const emailExists = await db('users').select('email').where({ email })
        if (!!emailExists.length) {
            res.status(400).json({ error: `Email ${email} is already in use` });
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({
            error,
            message: "Something went wrong, please try again later"
        })
    }

}

module.exports = { checkExistingEmail }
