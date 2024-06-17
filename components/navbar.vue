<template>
    <!-- navbar_start -->
    <div class="bg-[#5585b1]">

        <div class="flex justify-between text-[#ffffff] items-center px-[80px] py-[15px]">
            <div class="flex gap-[40px] font-semibold">
                <nuxt-link class="hover:text-[#c6ffff]" to="/">HOME</nuxt-link>
                <nuxt-link class="hover:text-[#c6ffff]" to="/products">PRODUCTS</nuxt-link>
                <nuxt-link class="hover:text-[#c6ffff]" to="/about">ABOUT</nuxt-link>
            </div>

            <div class="relative">
                <input class="w-[300px] px-[20px] py-[6px] focus:outline-none rounded-full" type="text" placeholder="Search">
                <i class="ri-search-2-line text-[#000000] absolute top-[5px] right-3 hover:text-[#5393ce]"></i>
            </div>
        </div>

    </div>
    <!-- navbar_end -->
</template>

<script setup>

</script>

<style></style>