const errLogger = (msg: string | Record<any, any> | unknown) => {
    const log = {
        time: new Date().toISOString(),
        msg: typeof msg === 'string' ? msg : JSON.stringify(msg),
    }

    // add export smwhr
    console.log(log)
}

export default errLogger
