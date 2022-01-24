<template>
  <h2>{{ title }}</h2>
  <PropertyList v-if="userInfo" :keys="userInfo" />
</template>

<script>
import PropertyList from "./ui/PropertyList.vue";
export default {
  components: {
    PropertyList,
  },
  props: {
    userInfo: {
      required: true,
      type: Array,
    },
    title: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
.main_card {
  padding: 0px 5px;
}
.val_prop {
}
</style>
