function getURLParams(param) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);

}

export default getURLParams;
