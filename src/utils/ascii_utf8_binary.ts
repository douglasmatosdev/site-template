/* eslint-disable camelcase */
export const convert = {
    asciiUtf8ToBinary(text: string): string {
        let binaryString = ''

        for (let i = 0; i < text.length; i++) {
            binaryString += text[i].charCodeAt(0).toString(2) + ' '
        }

        return binaryString
    },

    binaryToAsciiUtf8(binaryString: string): string {
        let ascii_utf8String = ''

        if (binaryString.length) {
            binaryString.split(' ').forEach(byte => {
                if (byte.trim().length) {
                    ascii_utf8String += String.fromCharCode(parseInt(byte.trim(), 2))
                }
            })
        }

        return ascii_utf8String
    }
}
