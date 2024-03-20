<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="
      $router.push({
        name: 'entry-view',
        params: { id: 10 },
      })
    "
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2024</span>
    </div>
    <div class="entry-description">
      Anim excepteur in fugiat dolore tempor non velit. Reprehenderit
      adipisicing eu enim dolor ut amet. Consectetur velit anim labore aute
      magna do velit in cillum officia excepteur dolor velit. Eu proident
      deserunt quis labore elit mollit Lorem duis excepteur officia cupidatat
      magna eu. Elit voluptate laboris enim ut minim est mollit. Consectetur
      tempor esse proident laboris.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c2c2c;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten(
      grey,
      45%
    ); // Corrección de la función lighten() y uso de punto y coma
    transition: 0.2s all ease-in; // Agregar punto y coma al final de la propiedad transition
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>