function errorHandler(error) {
  switch (error.code) {
    case '23505':
      const matchedString = error.detail.match(/\(([^()]+)\)/g);
      const cleanString = matchedString[1].replace(/([()])/g, "'");
      return `The value you entered for ${cleanString} already exists`;
    case '23502':
      return `No value was entered for '${error.column}'`
    default:
      return error;
  } 
}

module.exports = errorHandler;