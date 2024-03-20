<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
//fa-plus

export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: "fa-plus",
    },
  },
  methods: {
    toggleIcon() {
      if (this.iconClass === "fa fa-2x fa-plus") {
        this.iconClass = "fa fa-2x fa-save"; // Cambiar a otro icono, por ejemplo 'fa-minus'
      } else {
        this.iconClass = "fa fa-2x fa-plus"; // Cambiar de vuelta al icono original
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
}
</style>