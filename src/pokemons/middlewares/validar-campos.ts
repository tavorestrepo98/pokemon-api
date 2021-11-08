import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validarCampos = (req: Request, res: Response, next: NextFunction) => {
    const myErrors = validationResult(req);
    if(!myErrors.isEmpty()){
        return res.status(400).json({
            error: true,
            errors: myErrors['errors']
        });
    }

    next();
}