// tight-coupling
// 느슨한 결합(loose-coupling)으로 바꿔줌

export class CouponController {
  cashService;

  constructor() {
    this.cashService = cashService;
  }

  buyCoupon = (req, res) => {
    // 1. 가진돈 검증하는 코드
    const hasMoney = this.cashService.checkValue();

    // 2. 상품권 구매하는 코드
    if (hasMoney) {
      res.send("상품권 구매 완료!!");
    }
  };
}
