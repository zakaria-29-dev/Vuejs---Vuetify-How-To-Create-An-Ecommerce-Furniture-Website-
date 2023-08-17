<!-- <script setup lang="ts">
import { useI18n } from "vue-i18n";

import Logo from "./icons/Logo.vue";

const i18n = useI18n();
</script>

<template>
  <v-footer>
    <v-container>
      <v-row style="padding-inline: 10pt">
        <v-col
          cols="12"
          md="6"
          style="
            gap: 10pt;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <Logo width="150" />
          <p style="font-size: 9pt; font-weight: 500">
            {{ i18n.t("footer") }}
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h1 style="font-size: 10pt; font-weight: 600">
            {{ i18n.t("newsletterSubscribe") }}
          </h1>
          <div style="display: flex; flex-direction: row; gap: 10pt">
            <v-text-field
              :label="i18n.t('yourEmail')"
              prepend-inner-icon="mdi-email"
              variant="solo-filled"
              append-inner-icon="mdi-send"
              :hint="i18n.t('newsletterDescription')"
              persistent-hint
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style>
footer {
  margin-top: auto;
  max-height: 40vh;
  border-top: 3px solid #aea;
}
</style> -->

<template>
  <v-footer>
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="text-center"
      color="#FAFAFA"
    >
      <v-card-text>
        <v-btn class="mx-4" variant="text">Catalog</v-btn>
        <v-btn class="mx-4" variant="text">Designers</v-btn>
        <v-btn class="mx-4" variant="text">Blog</v-btn>
        <v-btn class="mx-4" variant="text">Inspiration</v-btn>
        <v-btn class="mx-4" variant="text">About us</v-btn>
        <v-btn class="mx-4" variant="text">Cotact</v-btn>
      </v-card-text>
      <v-card-text>
        @ {{ new Date().getFullYear() }} -
        <strong>.Furniture AAE IdeaPro All Rights Reserved</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
.v-footer {
  padding: 8px 0 !important;
}
</style>
