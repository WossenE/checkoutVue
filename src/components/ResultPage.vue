<script setup lang="ts">
import ResultContainer from "./ResultContainer.vue";
import Button from "./Button.vue";
</script>
<script lang="ts">
export default {
  data() {
    return {
      strawberry: "strawberry",
      strawberryAmount: 0,
    };
  },
  methods: {
    increaseAmount(item: string) {
      if (item === "strawberry") {
        this.strawberryAmount = this.strawberryAmount + 1;
        return this.strawberryAmount;
      }
    },
    decreaseAmount(item: string) {
      if (item === "strawberry") {
        if (this.strawberryAmount >= 1) {
          this.strawberryAmount = this.strawberryAmount - 1;
          return this.strawberryAmount;
        }
        return this.strawberryAmount;
      }
    },
  },
};
</script>

<template>
  <ResultContainer>
    <template #heading>£ total</template>
    <div>
      <div>
        <div class="image-holder">
          <img
            alt="Strawberry"
            class="logo"
            src="@/assets/strawberry.svg"
            width="125"
            height="125"
          />
          <div>
            <div>
              <Button
                @click="increaseAmount(strawberry)"
                value="+"
                color="green"
              />
            </div>
            <div>
              <Button
                @click="decreaseAmount(strawberry)"
                value="-"
                color="red"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="ammount">{{ strawberryAmount }}</div>
          <div class="item-price">£ Price</div>
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
