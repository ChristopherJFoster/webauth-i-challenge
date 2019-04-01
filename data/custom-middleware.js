const cookieCheck = (req, res, next) => {
  if (req.headers.cookie === 'pecan sandie') {
    next();
  } else {
    res.status(403).json({
      error: 'You shall not pass (because you must be logged in to do that)!'
    });
  }
};

module.exports = {
  cookieCheck
};
