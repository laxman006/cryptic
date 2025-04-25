const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export { formatDate, capitalizeFirstLetter, deepClone };