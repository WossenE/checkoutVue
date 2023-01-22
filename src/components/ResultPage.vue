<script setup lang="ts">
import ResultContainer from "./ResultContainer.vue";
import Button from "./Button.vue";
</script>
<script lang="ts">
import Cart from "@/utils/Cart";
import CartData from "@/utils/cartData.json";

export default {
  data() {
    const myCart = new Cart(CartData);
    console.log(myCart.getCartData());
    return { myCart };
  },
};
</script>

<template>
  <ResultContainer>
    <template #heading>Shopping Cart</template>
    <div class="table-header">
      <div class="table-header-cell">Product</div>
      <div class="table-header-cell">Unit Price</div>
      <div class="table-header-cell">Quantity</div>
      <div class="table-header-cell">Deducted Price</div>
      <div class="table-header-cell">Price</div>
    </div>
    <div>
      <div
        class="table-body"
        v-for="item in myCart.getCartData()"
        :key="item.productCode"
      >
        <div class="image-holder">
          <div>{{ item.productName }}</div>
          <img
            :alt="`${item.productName}`"
            class="logo"
            :src="`/src/assets/${item.productImageSrc}`"
            width="100"
            height="100"
          />
        </div>
        <div class="unit-price">
          €
          {{
            item.quantity
              ? myCart.getUnitPrice(item.productCode).toFixed(2)
              : "-"
          }}
        </div>
        <div>
          <Button @click="myCart.removeFromCart(item.productCode)" value="-" />
          <span class="quantity">{{ item.quantity }}</span>
          <Button @click="myCart.addToCart(item.productCode)" value="+" />
        </div>
        <div>
          <div class="reduction">
            - €
            {{
              item.quantity
                ? (
                    item.quantity * myCart.getUnitPrice(item.productCode) -
                    myCart.calculateTotalForProduct(item)
                  ).toFixed(2)
                : 0
            }}
          </div>
          <div>
            {{
              item.buyOneGetOneFree && item.quantity
                ? "Buy One Get One Free!"
                : ""
            }}
          </div>
        </div>
        <div>
          <div class="item-price">
            €
            {{
              item.quantity
                ? myCart.calculateTotalForProduct(item).toFixed(2)
                : 0
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      Total <span class="total">€ {{ myCart.getTotal() }}</span>
    </div>
  </ResultContainer>
</template>

<style>
.image-holder {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.image-holder > div {
  font-weight: 700;
}

.footer {
  font-size: 28px;
  padding-top: 1em;
  text-align: right;
  color: #666966;
  margin-top: 1em;
  border-top: solid 1px #666966;
}

.total {
  font-weight: 700;
  color: #4caf50;
}

.table-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: solid 1px #666966;
}

.table-header-cell {
  text-align: center;
  width: 100%;
}

.table-body {
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
}

.table-body > div {
  width: 100%;
  text-align: center;
}

.reduction {
  color: rgb(183, 61, 61);
}

.quantity {
  padding-inline: 1em;
}
</style>
