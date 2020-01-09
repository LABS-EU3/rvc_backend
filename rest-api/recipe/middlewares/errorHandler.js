function errorHandler(error) {
  switch (error.code) {
    case '23505':
      const matchedString = error.detail.match(/\(([^()]+)\)/g);
      const cleanString = matchedString[1].replace(/([()])/g, "'");
      return `The value you entered for ${cleanString} already exists`;
    case '23502':
      return `No value was entered for '${error.column}'`;
    case '42703':
      const matches = error.stack.match(/\"(.*?)\"/g);
      const message = matches.map(i => i.replace(/\"/g, '').toUpperCase());
      return `${message[1]} does not accept a ${message[0]} property`;
    default:
      console.log(error);
      return error;
  }
}

module.exports = errorHandler;
