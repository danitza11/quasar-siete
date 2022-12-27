<template>
  <q-page class="flex column">
    <span class="text-h1">Headline</span>
    <span class="text-h2">Headline</span>
    <span class="text-h3">Headline</span>
    <span class="text-h4">Headline</span>
    <span class="text-h5">Headline</span>
    <span class="text-h6">Headline</span>
    <q-separator />

    <span class="text-subtitle1">Subtitle1</span>
    <span class="text-subtitle2">Subtitle2</span>
    <q-separator />

    <p class="text-body1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>

    <span class="text-weight-thin">text-weight-thin</span>
    <span class="text-weight-light">text-weight-light</span>
    <span class="text-weight-regular">text-weight-regular</span>
    <span class="text-weight-bolder">text-weight-bolder</span>
    <span class="text-weight-medium">text-weight-medium</span>
    <span class="text-weight-bold">text-weight-bold</span>
    <span class="text-weight-bold">text-weight-bold</span>

    <q-btn color="primary" label="Abrir menu lateral" class="q-mt-md" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActualizarPage",
});
</script>
