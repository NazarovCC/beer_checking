<template>
  <ul>
    <li v-for="key in keys" :key="key[0]">
      <div v-if="key[0] !== 'coordinates'">
        <span class="key_prop">{{ key[0] }}</span
        >: <span class="val_prop">{{ key[1] }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    keys: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
li {
  list-style-type: none;
}
.key_prop {
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.val_prop {
  color: rgb(255, 99, 71);
  font-weight: none;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>
