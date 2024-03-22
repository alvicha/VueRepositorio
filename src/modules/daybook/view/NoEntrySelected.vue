<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <fab-button @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("@/modules/daybook/components/FabButton.vue")
    ),
  },
  methods: {
    async createNewEntry() {
      return this.$router.push({
        name: "entry-view",
        params: { id: "new" },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>