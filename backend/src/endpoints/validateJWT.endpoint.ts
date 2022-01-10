import { Request, Response } from 'express'

import { verifyTokenAndReturnUserId } from 'helpers/tokens'

const validateJWT = (req: Request, res: Response) => {
    const { jwt } = req.params

    res.json(verifyTokenAndReturnUserId(jwt))
}

export default validateJWT
