<template>
  <navbar-list />
  <div class="d-flex">
    <div class="col-4"><EntryList /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

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
};
</script>