export const formatObjPropertiesCamelCase = (obj: Record<string, any>) =>
    Object.keys(obj).reduce((acc, key) => {
        const pos = key.indexOf('_')

        // underscore not first or last char
        return {
            ...acc,
            [pos > 0 && pos !== key.length - 1
                ? key
                      .split('_')
                      .map((word, idx) =>
                          idx
                              ? `${word.charAt(0).toUpperCase()}${word
                                    .split('')
                                    .splice(1)
                                    .join('')}`
                              : word
                      )
                      .join('')
                : key]: obj[key],
        }
    }, {})
