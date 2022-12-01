function getDefaultResponse() {
  return {
    code: 400,
    message: "Something went wrong.",
  };
}

function setResponse(code, message, result) {
  return {
    code: code,
    message: message,
    result: result,
  };
}

module.exports = { getDefaultResponse, setResponse };
