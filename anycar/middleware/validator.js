const validatorCarData = (req, res, next) => {
  if (!req.body)
    return res
      .status(400)
      .json({ success: false, message: "body값이 필수입니다." });

  const { id, name } = req.body;

  if (!id || !name)
    return res
      .status(400)
      .json({ success: false, message: "id와 name 필드는 필수입니다." });

  if (!id || !name.trim())
    res
      .status(404)
      .json({ success: false, message: "모든 필드는 필수입니다." });

  const idRegex = /^[0-9]{4}[가-힣]$/; // 4자리 숫자와 한글 하나
  if (!idRegex.test(id))
    res.status(404).json({ success: false, message: "id 형식이 안맞음." });

  next();
};

module.exports = { validatorCarData };
