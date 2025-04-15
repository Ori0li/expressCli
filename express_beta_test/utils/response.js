const successResponse = (res, statusCode = 200, message = "OK", data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const failResponse = (
  res,
  statusCode = 404,
  message = "FAIL",
  code = "실패",
  details = "아무튼 실패"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
      details,
    },
  });
};

module.exports = { successResponse, failResponse };
