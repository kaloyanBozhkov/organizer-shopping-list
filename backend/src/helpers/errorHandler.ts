import { Request, Response } from 'express'

import errLogger from './errLogger'

const errorHandler =
    (fn: (req: Request, res: Response) => void | Promise<void>, path: string, method: string) =>
    (req: Request, res: Response) =>
        new Promise((resolve, reject) => {
            try {
                const result = fn(req, res)

                // not async it either errored & we catched or it completed
                if (!(result instanceof Promise)) return

                result.then(resolve).catch(reject)
            } catch (error) {
                reject(error)
            }
        }).catch((error) => {
            errLogger(`${method} ${path} - error: ${error.message}`)

            res.status(500).send({
                message:
                    process.env.NODE_ENV !== 'production' ? error.message : 'Something went wrong!',
            })
        })

export default errorHandler
