<template>
  <navbar-list />

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Espere por favor
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-4"><EntryList /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    //Son componentes asincronos
    NavbarList: defineAsyncComponent(() =>
      import("../components/NavbarList.vue")
    ),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
  methods: {
    ...mapActions("journalModule", ["loadEntries"]),
  },
  created() {
    this.loadEntries(); //Cuando este elemento se ha creado, se llamara a esta funcion
  },
  computed: {
    ...mapState("journalModule", ["isLoading"]), //Modulo interesado para extraer los state y su informacion
  },
};
</script>