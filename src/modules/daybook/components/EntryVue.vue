<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="
      $router.push({
        name: 'entry-view',
        params: { id: entry.id },
      })
    "
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ year }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    year() {
      const date = new Date(this.entry.date);
      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    },
  }
};
</script>

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