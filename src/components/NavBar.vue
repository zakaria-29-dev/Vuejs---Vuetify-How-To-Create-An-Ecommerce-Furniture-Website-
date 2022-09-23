<template>
  <v-app-bar app dark flat>
    <v-btn>
        <v-icon left class="mr-2">fas fa-bars</v-icon>
    </v-btn>
    <v-toolbar-title>CATALOG</v-toolbar-title>
    <div style="position: absolute;margin-left:auto;margin-right:auto;left:0;right:0;text-align: center;">
    <h4>.furniture</h4>
    </div>
    <v-spacer></v-spacer>
    <v-col cols="3">
        <v-text-field density="compact" variant="outlined" label="Search" append-inner-icon="fas fa-search" single-line hide-details class="mr-2"></v-text-field>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>