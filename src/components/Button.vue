<script lang="ts">
export default {
  name: "ButtonComponent",
  props: {
    value: String,
    color: String,
  },
};
</script>

<template>
  <button class="button">{{ value }}</button>
</template>

<style scoped>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 5px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 0.5em;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button {
  transition-duration: 0.5s;
}

.button:hover {
  background-color: #9bbf9c;
  color: white;
}
</style>
