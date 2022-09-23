<template>
  <v-footer>
    <v-card elevation="0" rounded="0" width="100%" class="text-center" color="#FAFAFA">
        <v-card-text>
            <v-btn class="mx-4" variant="text" >Catalog</v-btn>
            <v-btn class="mx-4" variant="text" >Designers</v-btn>
            <v-btn class="mx-4" variant="text" >Blog</v-btn>
            <v-btn class="mx-4" variant="text" >Inspiration</v-btn>
            <v-btn class="mx-4" variant="text" >About us</v-btn>
            <v-btn class="mx-4" variant="text" >Cotact</v-btn>
        </v-card-text>
        <v-card-text>
            @ {{ new Date().getFullYear()}} - <strong>.Furniture AAE IdeaPro All Rights Reserved</strong>
        </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>
.v-footer {
    padding: 8px 0 !important;
}
</style>