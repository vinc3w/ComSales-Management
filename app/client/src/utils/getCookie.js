function getCookie(name) {

    const cookie = document.cookie.split(';');

    for (const c of cookie) {

        const [key, value] = c.split('=');

        if (name === key.trim()) {
            return value.trim();
        }

    }

    return null;

}

export default getCookie;