export const errLogger = (msg: string | Record<any, any> | unknown) => {
    const log = {
        time: new Date().toISOString(),
        msg: typeof msg === 'string' ? msg : JSON.stringify(msg),
    }

    // add export smwhr
    logger(log)
}

// eslint-disable-next-line
export const logger = (...what: any[]) => console.log(...what)
