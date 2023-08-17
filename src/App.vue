<script setup lang="ts">
import { usePreferredColorScheme } from "@vueuse/core";
const colorMode = usePreferredColorScheme();
</script>

<template>
  <v-app>
    <v-theme-provider :theme="colorMode">
      <v-main>
        <router-view />
      </v-main>
    </v-theme-provider>
  </v-app>
</template>
