const { validationResult } = require('express-validator')

const validateFields = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {

        console.log(err);
        return res.status(400).json({
            ok: false,
            errors: err.errors
        });
    }
    next();
}

module.exports = {
    validateFields
}