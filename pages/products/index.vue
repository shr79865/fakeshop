<template>
    <div class="bg-[#fbfbfb] grid grid-cols-4 gap-5 p-[80px]">

        <card v-for="product in productStore.products" :key="product.id" :props="product" />

    </div>
</template>

<script setup>
// const { data: products } = await useFetch('https://fakestoreapi.com/products')
import {useProductsStore} from "~/store/products";

const productStore = useProductsStore();
productStore.fetchAllProducts();

</script>

<style scoped></style>