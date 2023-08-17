const jsonToQuery = (object) => {
    // object.map(keys => {
    //     console.log(keys);
    // })
    const keys = Object.keys(object);
    const queryString = keys.map(key => {
        const value = object[key];
        const queryString = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        return queryString;
    }).join("&")
    return queryString;
}
export default jsonToQuery;