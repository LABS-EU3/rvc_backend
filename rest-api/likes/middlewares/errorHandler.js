function errorHandler(error) {
  switch (error.code) {
    case '23505':
      return `You cannot vote twice for the same recipe`;
    default:
      console.log(error);
      return error;
  }
}

module.exports = errorHandler;
