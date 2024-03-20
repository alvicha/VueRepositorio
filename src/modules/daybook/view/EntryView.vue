<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div class="entry-title">
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2024</span>
    </div>

    <div class="button-container">
      <div class="button-margin">
        <button class="btn btn-danger">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
      </div>
      <div class="button-margin">
        <button class="btn btn-primary">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>

  <fab-button icon="fa-save" />
  <img
    src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
    alt="Picture-landscape"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("@/modules/daybook/components/FabButton.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 1);
}

.button-container {
  display: flex;
  align-items: center;
}

.button-margin {
  margin-left: 15px; /* Agrega margen entre los botones */
}
</style>