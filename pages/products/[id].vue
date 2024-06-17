<template>
    <div class="px-[300px] py-[80px] bg-[#e0e0e0]">

        <div
            class="grid grid-cols-2 gap-[100px] items-center bg-white px-[100px] py-[80px] duration-300 rounded-3xl shadow-[0_0_15px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_0_rgba(0,0,0,0.5)]">

            <div>
                <img class="w-[300px]" :src='product.image' alt="product_image">
            </div>

            <div
                class="flex text-[#ffffff] flex-col gap-[10px] p-[60px] bg-[#000000ce] hover:translate-y-[-10px] rounded-3xl shadow-xl hover:shadow-2xl duration-300">
                <h1 class="text-[20px] pb-[30px] font-semibold">{{ product.title }}</h1>
                <p><span class="font-semibold text-[#e9d64a]">Category :</span> {{ product.category }}</p>
                <p><span class="font-semibold text-[#e9d64a] ">Rating :</span> {{ product.rating }}</p>
                <p><span class="font-semibold text-[#e9d64a]">Price : $</span> {{ product.price }}</p>
                <p><span class="font-semibold text-[#e9d64a]">Description :</span> {{ product.description }}</p>
            </div>

        </div>

    </div>
</template>

<script setup>
const route = useRoute().params.id
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${route}`)
</script>

<style scoped></style>