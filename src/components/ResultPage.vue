<script setup lang="ts">
import ResultContainer from "./ResultContainer.vue";
import Button from "./Button.vue";
</script>
<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          productCode: "FR1",
          productName: "Fruit tea",
          buyOneGetOneFree: true,
          pricing: {
            1: 3.11,
          },
          productAmount: 0,
          productImageSrc: "fruitTea.png",
          productPrice: 3.11,
        },
        {
          productCode: "SR1",
          productName: "Strawberry",
          buyOneGetOneFree: false,
          pricing: {
            1: 5.0,
            3: 4.5,
          },
          productAmount: 0,
          productImageSrc: "strawberry.svg",
          productPrice: 5.0,
        },
        {
          productCode: "CF1",
          productName: "Coffee",
          buyOneGetOneFree: false,
          pricing: {
            1: 11.23,
          },
          productAmount: 0,
          productImageSrc: "coffee.svg",
          productPrice: 11.23,
        },
      ],
      total: 0,
    };
  },
  methods: {
    increaseAmount(item: any) {
      item.productAmount = item.productAmount + 1;
      return item.productAmount;
    },
    decreaseAmount(item: any) {
      if (item.productAmount >= 1) {
        item.productAmount = item.productAmount - 1;
        return item.productAmount;
      }
      return item.productAmount;
    },
  },
};
</script>

<template>
  <ResultContainer>
    <template #heading>£ total</template>
    <div>
      <div v-for="item in items" :key="item.productCode">
        <div class="image-holder">
          <img
            :alt="`${item.productName}`"
            class="logo"
            :src="`/src/assets/${item.productImageSrc}`"
            width="125"
            height="125"
          />
          <div>
            <div>
              <Button @click="increaseAmount(item)" value="+" />
            </div>
            <div>
              <Button @click="decreaseAmount(item)" value="-" />
            </div>
          </div>
        </div>
        <div>
          <div class="ammount">{{ item.productAmount }}</div>
          <div class="item-price">
            £ {{ (item.productPrice * item.productAmount).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
  </ResultContainer>
</template>

<style>
.image-holder {
  display: flex;
  text-align: center;
  align-items: center;
}
</style>
