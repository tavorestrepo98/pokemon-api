"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
var express_validator_1 = require("express-validator");
var validarCampos = function (req, res, next) {
    var myErrors = express_validator_1.validationResult(req);
    if (!myErrors.isEmpty()) {
        return res.status(400).json({
            error: true,
            errors: myErrors['errors']
        });
    }
    next();
};
exports.validarCampos = validarCampos;
