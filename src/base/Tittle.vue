<template>
  <div class="title-wrap">
    <p class="title">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
.title-wrap {
  display: flex;
  padding: 12px 0;
}

.title-wrap .title {
  font-size: 18px;
  color: #333333;
}
</style>