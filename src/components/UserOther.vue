<template>
  <h2>{{ title }}</h2>
  <div v-if="userInfo" class="card_body">
    <CardForOtherInformation
      v-for="one in userInfo"
      :key="one[0]"
      :other="one[0]"
      :obj="one[1]"
    />
  </div>
</template>

<script>
import CardForOtherInformation from "./CardForOtherInformation.vue";
export default {
  components: {
    CardForOtherInformation,
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
.card_body {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
