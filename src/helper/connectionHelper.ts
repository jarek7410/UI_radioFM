export const checkUrl = (url: string): string|undefined => {
    const expression = /(?:https?:\/\/)?(?:www\.)?(?:localhost|[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?)/gi;
    const regex = new RegExp(expression);

    if (url.match(regex)) {
        return url
    } else {
        return undefined
    }
}