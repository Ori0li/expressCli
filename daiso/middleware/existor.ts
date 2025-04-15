import daisoService from "../services/daisoService";
import { NextFunction, Request, Response } from "express";

const existor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.params;
  const product = await daisoService.getProduct(name);
  if (!product) {
    res.status(404).json({ message: "상품이 존재하지 않습니다." });
    return;
  }
  (req as any).product = product;
  next();
};

export default existor;
