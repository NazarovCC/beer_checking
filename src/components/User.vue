<template>
  <div class="user" v-if="user">
    <h1>
      {{ user.first_name + " " + user.last_name }}
    </h1>
    <div class="main">
      <div class="user_img">
        <n-image
          width="200"
          :src="
            !user.avatar
              ? 'https://osipbove.ru/design/image/otzyvy/no_avatar.jpg'
              : user.avatar
          "
        />
        <n-button
          type="primary"
          @click="showModal = true"
          :style="{ marginTop: '10px' }"
          color="#8a2be2"
          >Сгенерировать пивко
          <n-icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <path
                d="M392 208h-24v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 0 0-67.51 77.54A63.91 63.91 0 0 0 80 231.39V440a56.06 56.06 0 0 0 56 56h176a56.06 56.06 0 0 0 56-56v-8h24a72.08 72.08 0 0 0 72-72v-80a72.08 72.08 0 0 0-72-72zM176 416a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 0 0 282 176H160a16 16 0 0 0-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 0 1 0-64c.09 0 9.12.34 16.4 5.8a16 16 0 1 0 19.2-25.6A63.69 63.69 0 0 0 112 112a63.55 63.55 0 0 0-14 1.57A24 24 0 0 1 120 80a23.78 23.78 0 0 1 19.38 9.84a51.35 51.35 0 0 1 4.71 7.9A16 16 0 0 0 176 96c0-6.77-3.61-15.17-10.76-25c-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142a16 16 0 0 0 12.73 18.71a16.29 16.29 0 0 0 3 .28a16 16 0 0 0 15.7-13a111.78 111.78 0 0 0 1.96-19.42a32 32 0 0 1-6 63.43zm112 168a40 40 0 0 1-40 40h-24V240h24a40 40 0 0 1 40 40z"
                fill="currentColor"
              ></path></svg></n-icon
        ></n-button>
      </div>
      <div class="user_main">
        <UserMain :userInfo="main" :title="'Main Information'" />
      </div>
    </div>

    <div class="user_other">
      <UserOther :title="'Other Information'" :userInfo="other" />
    </div>
  </div>
  <n-modal v-model:show="showModal" preset="dialog" title="Генератор пивка">
    <template #header>
      <div>Генератор пивка</div>
    </template>
    <Beer />
  </n-modal>
</template>

<script>
import { ref, onMounted } from "vue";
import { NImage, NButton, NIcon, NModal } from "naive-ui";
import UserMain from "./UserMain.vue";
import UserOther from "./UserOther.vue";
import Beer from "./Beer.vue";
import { useMainCategoryKey, useOtherCategoryKey } from "../use/useKeys";
import axios from "axios";

async function downloadUser() {
  try {
    const response = await axios.get(
      "https://random-data-api.com/api/users/random_user"
    );
    return response.data;
  } catch (e) {
    console.log(e.massage);
    return null;
  }
}

export default {
  components: {
    NImage,
    NButton,
    NIcon,
    NModal,
    UserMain,
    UserOther,
    Beer,
  },
  setup() {
    const showModal = ref(false);
    const user = ref(null);
    onMounted(async () => {
      user.value = await downloadUser();
    });

    return {
      showModal,
      ...useMainCategoryKey(user),
      ...useOtherCategoryKey(user),
      user,
    };
  },
};
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 50px auto;
  padding: 15px;
  justify-content: space-around;
  border-radius: 15px;
  background-color: white;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: "center";
}
.user_img {
  flex: 1;
  display: flex;
  padding: 10px;
  margin-top: 20px;
  justify-content: space-around;
  align-items: "center";
  flex-direction: column;
}
.n-image {
  justify-content: space-around;
}
.user_card {
  background: chartreuse;
}
.user_main {
  flex: 1;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: -1em 0 0.4em rgba(0, 0, 0, 0.2);
  background: lavenderblush;
}

.user_other {
  max-width: 850px;
  margin-top: 20px;
  flex-wrap: wrap;
}
</style>
