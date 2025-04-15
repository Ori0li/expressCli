import existor from "../middleware/existor";
import validatorProductData from "../middleware/validator";
import daisoService from "../services/daisoService";
import express, { Request, Response } from "express";

const daisoRouter = express.Router();

daisoRouter.get("/", async (req: Request, res: Response) => {
  res.json(await daisoService.getAll());
});

daisoRouter.get("/:name", existor, async (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "상품 조회 완료",
    data: { product: (req as any).product },
  });
});

daisoRouter.post(
  "/",
  validatorProductData,
  async (req: Request, res: Response) => {
    const { name, price, quantity } = req.body;
    res.json({
      success: true,
      message: "상품 생성 완료",
      data: {
        product: await daisoService.createProduct(name, price, quantity),
      },
    });
  }
);

daisoRouter.put("/", async (req, res) => {
  res.json({
    success: true,
    message: "상품 수정 완료",
    data: { product: await daisoService.updateProduct(req.body) },
  });
});

daisoRouter.delete("/", async (req, res) => {
  res.json({
    success: true,
    message: "상품 삭제 완료",
    data: { product: await daisoService.deleteProduct(req.body.id) },
  });
});

export default daisoRouter;
