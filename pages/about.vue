<template>
    <div class="h-svh flex justify-center">
        <hr>
        <h1>About Page</h1>
        <hr>
    </div>
</template>

<script setup>
import { useProductsStore } from '~/store/products';

const yoyo = useProductsStore();
</script>

<style scoped></style>