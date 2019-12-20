
function validateFields(req, res, next) {
    const { body } = req;
    let invalidCount = 0;
    if (Object.entries(body).length !== 0 && body.constructor === Object) {

        for (entry in body) {
            if (typeof body[entry] !== 'string') {
                invalidCount++;
            }
        }

        if (!invalidCount) {
            next();
        } else {
            res.status(400).json({ error: 'Values passed in are not strings' })
        }

    } else {
        res.status(400).json({ error: 'req.body is empty.' })
    }
}

module.exports = { validateFields }