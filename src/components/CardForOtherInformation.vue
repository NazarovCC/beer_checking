<template>
  <div class="credit">
    <n-card :title="other">
      <PropertyList v-if="objKey" :keys="objKey" />
    </n-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { NCard } from "naive-ui";
import PropertyList from "./ui/PropertyList.vue";
import { useKeyObject } from "../use/useKeys";

export default {
  components: {
    NCard,
    PropertyList,
  },
  props: {
    obj: {
      required: true,
      type: Object,
    },
    other: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const zal = ref(props.obj);
    return {
      ...useKeyObject(zal),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Sedgwick+Ave&display=swap");

.credit {
  display: flex;
  justify-content: space-between;
}
.n-card {
  font-family: "Sedgwick Ave", cursive;
  flex: 1;
  max-width: 400px;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 40px -16px rgba(60, 179, 113, 0.1);
  background-color: rgb(60, 179, 113);
}
.n-card >>> span.val_prop {
  color: rgb(245, 222, 179);
}
.n-card:hover {
  transform: scale(1.02);
}
</style>
