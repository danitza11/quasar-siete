<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>

    <div class="row justify-center">
      <div class="col-6">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-xs">
          <q-input
            filled
            type="number"
            v-model="name"
            label="Usuario *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val || val.length > 0) || 'Este campo es obligatorio',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Contrasenia *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
              (val) => (val > 0 && val < 100) || 'Este campo es obligatorio',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="age"
            label="Repetir contrasenia *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
              (val) => (val > 0 && val < 100) || 'Este campo es obligatorio',
            ]"
          />

          <!--<q-toggle v-model="accept" label="I accept the license and terms" />-->

          <div class="row justify-end">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormsPage",
});
</script>
