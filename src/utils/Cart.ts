//@ts-nocheck

//  [{
//     "productCode": "FR1",
//     "productName": "Fruit tea",
//     "buyOneGetOneFree": true,
//     "pricing": { "1": 3.11 },
//     "quantity": 0,
//     "productImageSrc": "fruitTea.png"
//   }, ...]

class Cart {
  constructor(cartData) {
    this.cartData = cartData;
    this.totalPrice = 0;
  }

  addToCart(productCode) {
    console.log(`addToCart(${productCode}) called`);
    const product = this.getcartDataForProduct(productCode);
    product.quantity += 1;
    this.calculateTotal();
  }

  removeFromCart(productCode) {
    const product = this.getcartDataForProduct(productCode);

    if (product.quantity > 0) {
      product.quantity -= 1;
    }
    this.calculateTotal();
  }

  getTotal() {
    return this.totalPrice.toFixed(2);
  }

  getUnitPrice(productCode) {
    const { pricing, quantity } = this.getcartDataForProduct(productCode);

    const quantities = Object.keys(pricing).map((i) => parseInt(i, 10));
    /**
     * The amounts may or may not be sorted, depends on value passed to constructor
     * We want the largest integer that is less than or equal to amount
     */

    let largestIntegerLessThanOrEqualToQuantity = 0;
    quantities.forEach((q) => {
      if (q <= quantity && q > largestIntegerLessThanOrEqualToQuantity) {
        largestIntegerLessThanOrEqualToQuantity = q;
      }
    });

    return pricing[largestIntegerLessThanOrEqualToQuantity];
  }

  getCartData() {
    return this.cartData;
  }

  calculateTotal() {
    this.totalPrice = 0;
    console.log(`calculateTotal called`);
    this.cartData.forEach((product) => {
      const productTotalPrice = this.calculateTotalForProduct(product);
      this.totalPrice += productTotalPrice;
    });
  }

  calculateTotalForProduct(product) {
    let total = 0;
    const { productCode, quantity, buyOneGetOneFree } = product;
    if (quantity > 0) {
      const unitPrice = this.getUnitPrice(productCode);

      total += unitPrice * quantity;

      if (buyOneGetOneFree) {
        const numberOfFreeItems = Math.floor(quantity / 2);
        total -= numberOfFreeItems * unitPrice;
      }
    }
    return total;
  }

  getcartDataForProduct(productCode) {
    return this.cartData.find((product) => product.productCode === productCode);
  }
}

export default Cart;
