<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
 mounted() {
    
  },
};
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>