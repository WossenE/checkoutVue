<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Supermarket Sells</template>
    Our supermarket's CEO has prompted us to open a new supermarket that sells
    three products - Fruit tea, Strawberry and Coffee.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Buy One Get One</template>

    The CEO is a big fan of **buy—one—get—one—free offers** and fruit tea. He
    wants us to add a rule to do this.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Strawberries</template>
    The COO likes low prices and wants people buying strawberries to get a
    discount for bulk purchases. If you buy 3 or more strawberries, the price
    should drop to 4.50 €.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Flexibility</template>
    Our checkout sells items in any order, and because the CEO and COO change
    their minds often, it needs to be flexible regarding our pricing rules.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Interface</template>
    The interface of our checkout class looks like this -
    <div class="interface">
      <p>$checkout = new Checkout($pricingRules);</p>
      <p>
        <span>$checkout—>addToCart($item); </span>
        <span>$checkout—>addToCart($item);</span>
      </p>
      <p>$price = $checkout—>getTotal();</p>
    </div>
  </WelcomeItem>
</template>
