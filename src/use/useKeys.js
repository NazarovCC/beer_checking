import { computed } from 'vue';
export function useKeyObject(obj) {
  const objKey = computed(() => {
    console.log(obj);
    if (obj.value) {
      return [...Object.entries(obj.value)];
    }
    return null;
  });
  return {
    objKey,
  };
}

export function useMainCategoryKey(obj) {
  const main = computed(() => {
    const m = [];
    if (obj) {
      for (const key in obj.value) {
        if (typeof obj.value[key] !== 'object' && key !== 'avatar') {
          m.push([key, obj.value[key]]);
        }
      }
    }
    return m;
  });
  return {
    main,
  };
}
export function useOtherCategoryKey(obj) {
  const other = computed(() => {
    const m = [];
    if (obj) {
      for (const key in obj.value) {
        if (typeof obj.value[key] === 'object') {
          m.push([key, obj.value[key]]);
        }
      }
    }
    return m;
  });
  return {
    other,
  };
}
