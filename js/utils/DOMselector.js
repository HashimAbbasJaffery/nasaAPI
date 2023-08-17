const getElement = className => document.querySelector(className);

const insertData = (className, data, type = "textContent") => {
    const element = getElement(className);
    element[type] = data;
}
export { getElement, insertData };