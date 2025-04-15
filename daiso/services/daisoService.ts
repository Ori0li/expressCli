import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const daisoService = {
  async getAll() {
    const products = await prisma.products.findMany();
    return products;
  },
  async getProduct(name: string) {
    const product = await prisma.products.findFirst({
      where: { name: name },
    });
    return product;
  },
  async createProduct(name: string, price: number, quantity: number) {
    const product = await prisma.products.create({
      data: { name, price, quantity },
    });
    return product;
  },
  async updateProduct(productData: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }) {
    const { id, name, price, quantity } = productData;
    const product = await prisma.products.update({
      where: { id: Number(id) },
      data: { name, price: Number(price), quantity: Number(quantity) },
    });
    return product;
  },
  async deleteProduct(id: number) {
    const product = await prisma.products.delete({
      where: { id: Number(id) },
    });
    return product;
  },
};

export default daisoService;
