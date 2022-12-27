<template>
  <div class="principal">
    <q-page class="q-pa-xl row items-start q-gutter-lg">
      <div class="col-4">
        <div class="q-pa-md">
          <q-uploader
            url="http://localhost:4444/upload"
            label="Custom header"
            multiple
            style="height: 500px"
          >
            <template v-slot:header="scope">
              <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                <q-btn
                  v-if="scope.queuedFiles.length > 0"
                  icon="clear_all"
                  @click="scope.removeQueuedFiles"
                  round
                  dense
                  flat
                >
                  <q-tooltip>Limpiar todo</q-tooltip>
                </q-btn>
                <q-btn
                  v-if="scope.uploadedFiles.length > 0"
                  icon="done_all"
                  @click="scope.removeUploadedFiles"
                  round
                  dense
                  flat
                >
                  <q-tooltip>Eliminar archivos cargados</q-tooltip>
                </q-btn>
                <q-spinner
                  v-if="scope.isUploading"
                  class="q-uploader__spinner"
                />
                <div class="col">
                  <div class="q-uploader__title">Agregue una imagen</div>
                  <div class="q-uploader__subtitle">
                    {{ scope.uploadSizeLabel }} /
                    {{ scope.uploadProgressLabel }}
                  </div>
                </div>
                <q-btn
                  v-if="scope.canAddFiles"
                  type="a"
                  icon="lar la-plus-square"
                  @click="scope.pickFiles"
                  round
                  dense
                  flat
                >
                  <q-uploader-add-trigger />
                  <q-tooltip>Seleccionar archivo</q-tooltip>
                </q-btn>
                <q-btn
                  v-if="scope.canUpload"
                  icon="las la-upload"
                  @click="scope.upload"
                  round
                  dense
                  flat
                >
                  <q-tooltip>Subir archivo</q-tooltip>
                </q-btn>

                <q-btn
                  v-if="scope.isUploading"
                  icon="las la-upload"
                  @click="scope.abort"
                  round
                  dense
                  flat
                >
                  <q-tooltip>Cancelar carga</q-tooltip>
                </q-btn>
              </div>
            </template>
          </q-uploader>    

          
        </div>
      </div>

      <q-separator spaced inset horizontal dark />
      <div class="col-6">
        <div>
          <span class="text-weight-bolder">Crear Nuevo Proyecto</span>
          <q-separator spaced inset vertical dark />


          <q-scroll-area
            style="height: 500px; max-width: 500px; padding: 30px"
          >



          <!-- <div class="q-pa-md" style="max-width: 500px"> -->

            <div v-for="n in 1" :key="n" class="q-pa-xs">
            <q-input
              outlined
              v-model="ph"
              label="CUI/SNIP"
              placeholder="Digite el codigo CUI o SNIP del proyecto"
              style="max-width: 300px margin-bottom: 30px;"
              :dense="dense"
            />
            <q-separator spaced inset vertical dark />

            <div horizontal align="end">
              <q-btn color="primary" label="Consultar" />
            </div>

            <q-separator spaced inset vertical dark />

            <q-input
              v-model="ph"
              label="Nombre de proyecto"
              placeholder="Ej. Proyecto - Hospital Basico Lampa"
              :dense="dense"
            />

            <q-input
              v-model="ph"
              label="Sector de proyecto"
              placeholder="Escriba al sector que pertenece el proyecto"
              :dense="dense"
            />

            <q-select
              v-model="model"
              :options="options"
              label="Ubicacion de proyecto"
            />

            <q-select v-model="mod" :options="opcion" label="Modalidad" />

            <q-select
              v-model="ejecutora"
              :options="opcejecutora"
              label="Unidad Ejecutora"
            />

            <q-input color="Primary" v-model="text" label="Fecha inicio">
              <template v-slot:append>
                <q-icon name="event" />
              </template>
            </q-input>

            <q-input color="Primary" v-model="text" label="Fecha fin">
              <template v-slot:append>
                <q-icon name="event" />
              </template>
            </q-input>

            <q-separator spaced inset vertical dark />

            <span class="text-weight-bolder">Responsable</span>

            <q-input
              v-model="ph"
              label="Nombre"
              placeholder="Escriba los datos completos del responsable del proyecto"
              :dense="dense"
            />

            <q-separator spaced inset vertical dark />

            <div horizontal align="end">
              <q-btn color="primary" label="Publicar" />
            </div>
          <!-- </div> -->

        </div>
        </q-scroll-area>



        </div>
      </div>
    </q-page>
  </div>
</template>

<style lang="sass" scoped></style>

<script>
import { ref } from "vue";

































export default {
  setup() {
    return {
      model: ref(null),
      options: [
        {
          label: "Puno",
          value: "goog",
        },
        {
          label: "Azangaro",
          value: "fb",
        },
        {
          label: "Lampa",
          value: "app",
        },
        {
          label: "Huancane",
          value: "fb",
        },
        {
          label: "Melgar",
          value: "twt",
        },
      ],

      mod: ref(null),
      opcion: [
        {
          label: "Directa",
          value: "dir",
        },
        {
          label: "Indirecta",
          value: "indir",
        },
      ],

      ejecutora: ref(null),
      opcejecutora: [
        {
          label: "Prorride",
          value: "pro",
        },
        {
          label: "Pesqueria Puno",
          value: "indir",
        },
        {
          label: "Sede Puno",
          value: "Sed",
        },
      ],

      // options: [
      //   {
      //     label: "Google",
      //     value: "goog",
      //   },
      //   {
      //     label: "Facebook",
      //     value: "fb",
      //   },
      //   {
      //     label: "Twitter",
      //     value: "twt",
      //   },
      //   {
      //     label: "Apple",
      //     value: "app",
      //   },
      //   {
      //     label: "Oracle",
      //     value: "ora",
      //     disable: true,
      //   },
      // ],
    };
  },
};
</script>
