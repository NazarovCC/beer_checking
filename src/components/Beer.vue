<template>
  <div class="content">
    <div class="spiner">
      <n-spin v-if="isLoading" size="large" />
    </div>
    <div v-if="objKey">
      <PropertyList :keys="objKey" />
    </div>
    <div v-else>Нема пивка</div>
    <n-button @click="handlerBeer">Хочу другое</n-button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { NButton, NSpin } from "naive-ui";
import PropertyList from "./ui/PropertyList.vue";
import { useKeyObject } from "../use/useKeys";
import axios from "axios";
export default {
  components: {
    NButton,
    NSpin,
    PropertyList,
  },
  setup() {
    const beer = ref(null);
    const isLoading = ref(false);
    const handlerBeer = async () => {
      try {
        isLoading.value = true;
        const { data } = await axios.get(
          "https://random-data-api.com/api/beer/random_beer"
        );
        beer.value = data;
      } catch (e) {
        console.log(e.message);
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(async () => {
      await handlerBeer();
    });

    return {
      ...useKeyObject(beer),
      handlerBeer,
      isLoading,
    };
  },
};
</script>

<style scoped>
.content {
  background-image: url("https://i.pinimg.com/originals/5d/b2/63/5db263b183c85dbec594dfb5d66a8260.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.spiner {
  text-align: center;
}
</style>
