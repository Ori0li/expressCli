import { NextFunction, Request, Response } from "express";

const validatorProductData = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, price, quantity } = req.body;
  if (!name || !price || !quantity) {
    res.status(400).json({ message: "모든 필드를 입력해주세요." });
    return;
  }
  if (typeof name !== "string") {
    res.status(400).json({ message: "상품명은 문자열이어야 합니다." });
    return;
  }
  if (typeof price !== "number" || price < 0) {
    res.status(400).json({ message: "가격은 0 이상의 숫자여야 합니다." });
    return;
  }
  if (typeof quantity !== "number" || quantity < 0) {
    res.status(400).json({ message: "수량은 0 이상의 숫자여야 합니다." });
    return;
  }
  next();
};

export default validatorProductData;
