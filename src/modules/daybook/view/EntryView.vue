<template>
  <div v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div class="entry-title">
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ year }}</span>
      </div>

      <div class="button-container">
        <input
          type="file"
          @change="onSelectedImage"
          ref="imageSelector"
          v-show="false"
          accept="image/png, image/jpeg"
        />
        <div class="button-margin">
          <button v-if="entry.id" class="btn btn-danger" @click="deleteEntry">
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>
        </div>
        <div class="button-margin">
          <button class="btn btn-primary" @click="onSelectImage">
            Subir foto
            <i class="fa fa-upload"></i>
          </button>
        </div>
      </div>
    </div>

    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="¿Qué sucedió hoy?"></textarea>
    </div>

    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
      class="img-thumbnail"
    />

    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-picture"
      class="img-thumbnail"
    />
  </div>
  <fab-button icon="fa-save" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "@/modules/daybook/helpers/getDayMonth";
import Swal from "sweetalert2";
import uploadImage from "@/modules/daybook/helpers/uploadImage";

export default {
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("journalModule", [
      "updateEntries",
      "createEntries",
      "deleteEntries",
    ]),
    async loadEntry() {
      try {
        if (this.id === "new") {
          this.entry = { text: "", date: new Date().getTime() };
        } else {
          this.entry = await this.getEntryById(this.id);
        }

        if (!this.entry) this.$router.push({ name: "no-entry" });
      } catch (error) {
        console.error("Error loading entry:", error);
      }
    },
    async saveEntry() {
      try {
        const picture = await uploadImage(this.file);
        this.entry.picture = picture;

        if (this.entry.id) {
          await this.updateEntries(this.entry);
        } else {
          const id = await this.createEntries(this.entry);
          this.$router.push({ name: "no-entry", params: { id } });
        }

        Swal.fire(
          "Se ha guardado correctamente!",
          "Entrada registrada correctamente",
          "success"
        );
      } catch (error) {
        console.error("Error saving entry:", error);
        Swal.fire(
          "Error al guardar la entrada",
          "Ocurrió un error al intentar guardar la entrada.",
          "error"
        );
      }
    },
    async deleteEntry() {
      try {
        const { isConfirmed } = await Swal.fire({
          title: "¿Estás seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí",
        });

        if (isConfirmed) {
          await this.deleteEntries(this.entry.id);
          Swal.fire("Eliminado", "Entrada eliminada exitosamente", "success");
          this.$router.push({ name: "no-entry" });
        }
      } catch (error) {
        console.error("Error deleting entry:", error);
        Swal.fire(
          "Error al eliminar la entrada",
          "Ocurrió un error al intentar eliminar la entrada.",
          "error"
        );
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
    },
  },
  components: {
    FabButton: defineAsyncComponent(() =>
      import("@/modules/daybook/components/FabButton.vue")
    ),
  },
  created() {
    this.loadEntry();
  },
  computed: {
    ...mapGetters("journalModule", ["getEntryById"]),
    day() {
      return getDayMonthYear(this.entry.date).day;
    },
    month() {
      return getDayMonthYear(this.entry.date).month;
    },
    year() {
      return getDayMonthYear(this.entry.date).year;
    },
  },
  watch: {
    id() {
      this.loadEntry();
    },
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
  margin-left: 15px;
}
</style>
