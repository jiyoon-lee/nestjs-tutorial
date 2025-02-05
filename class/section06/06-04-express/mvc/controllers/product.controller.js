export class ProductController {
  cashService;
  productService;

  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    const hasMoney = this.cashService.checkValue();

    const isSoldOut = this.productService.checkSoldOut();

    if (hasMoney && !isSoldOut) res.send("상품 구매 완료!!");
  };

  refundProduct = (req, res) => {
    const isSoldOut = this.productService.checkSoldOut();

    if (isSoldOut) {
      res.send("상품 환불 완료!!");
    }
  };
}
