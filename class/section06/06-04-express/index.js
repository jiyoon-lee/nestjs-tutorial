import express from "express";
import { CouponController } from "./mvc/controllers/coupon.controller";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { ProductService } from "./mvc/controllers/services/product.service";

const app = express();

const cashService = new CashService();
const productService = new ProductService();

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon);

// 게시판 API

app.listen(3000);
