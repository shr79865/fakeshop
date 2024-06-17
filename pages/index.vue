<template>

    <!-- heroSection_start -->
    <div class="flex px-[80px] py-[80px] gap-[100px] items-center ">
        <!-- hero-image start -->
        <div>
            <img class="w-[1700px]" src="../public/hero_image.svg" alt="hero_image">
        </div>
        <!-- hero-image end -->

        <!-- welcome-start -->
        <div>
            <h1 class="text-[60px] text-[#448ec6] font-bold">Welcome to FakeShop</h1>
            <p class="text-[20px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et at, aut debitis
                consequuntur harum fugit
                accusamus accusantium, temporibus reprehenderit tempora veritatis in voluptates nam numquam cumque
                praesentium illo delectus quisquam!</p>
        </div>
        <!-- welcome-end -->
    </div>
    <!-- heroSection_end -->

    <!-- top-5-products start -->
    <div class="bg-[#EEF4F2] pt-[30px]">

        <h1 class="text-[40px] text-[#0c0d0d] font-bold pb-[20px] flex justify-center items-center">Top Products</h1>
        <hr>

        <div class="p-[80px] grid grid-cols-4 gap-[60px]">
            <card v-for="product in productStore.five" :key="product.id" :props="product" />
        </div>

    </div>
    <!-- top-5-products end -->

    <!-- product_categories start -->
    <div class="flex flex-col gap-[50px] p-[60px] justify-center items-center">
        <div>
            <h1 class="text-[30px] font-semibold">PRODUCT BY CATEGORY</h1>
        </div>

        <div class="flex gap-[20px] font-semibold">
            <button
                class="text-[17px] px-[100px] py-[15px] bg-[#c2c2c2] rounded-full hover:translate-y-[-5px] shadow-xl hover:shadow-2xl duration-300"
                v-for="category in categories" :key="category" @click="changeUrl(category)">{{ category }}
            </button>
        </div>

        <div class="grid grid-cols-4 gap-8">
            <card v-for="product in jewels" :key="product.id" :props="product" />
        </div>
    </div>
    <!-- product_categories end -->
</template>

<script setup>
import {useProductsStore} from "~/store/products";
//five products
const productStore = useProductsStore();
productStore.fetchProducts();

// fetch categories
const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')

// fetch electronics products
const url = ref('https://fakestoreapi.com/products/category/electronics');
const { data: jewels } = await useFetch(url);

// change url
function changeUrl(monkey) {
    url.value = `https://fakestoreapi.com/products/category/${monkey}`
}

</script>

<style scoped></style>