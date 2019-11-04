<template>
  <h3>
    {{ message }}
    <br />
    {{ messagex }}
  </h3>
</template>
<script>
export default {
  data() {
    return {
      message: null
    };
  },
  created() {
    this.message = "- Превед, а я Vue!";
    this.messagex = this.$store.getters.getMessage;
  }
};
</script>
<style lang="scss" scoped>
h1 {
  color: purple;
}
</style>