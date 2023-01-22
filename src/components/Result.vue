<script setup lang="ts">
import ResultContainer from "./ResultContainer.vue";
</script>

<template>
  <ResultContainer>
    <template #heading>£ total</template>
    <div>
      <div>
        <div>
          <img
            alt="Strawberry"
            class="logo"
            src="@/assets/strawberry.svg"
            width="125"
            height="125"
          />
          <button class="add-button">-</button>
          <!-- <button class="add-button">+</button> -->
          <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </div>
        <div>
          <div class="ammount">1</div>
          <div class="item-price">£ Price</div>
        </div>
      </div>
    </div>
  </ResultContainer>
</template>
