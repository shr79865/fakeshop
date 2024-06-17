<template>
    <div
        class="bg-[#ffffff] p-[30px] rounded-[30px] shadow-xl hover:shadow-2xl h-auto w-[250px] hover:translate-y-[-10px] duration-300 flex flex-col gap-7">
        <div class="flex justify-center h-[200px] w-auto items-center">
            <img class="h-[175px]" :src='props.image' alt="">
        </div>

        <div>
            <h1 class="pb-[10px] text-[18px] font-semibold">{{ props.title }}</h1>
            <p>Price: $ {{ props.price }}</p>
            <button @click="navigateTo(`/products/${props.id}`)" class="text-[20px] text-[#41c6bf] hover:text-[#5fe984]" to=""><i class="ri-more-fill"></i></button>
        </div>
    </div>
</template>

<script setup>
defineProps(['props'])
</script>

<style scoped></style>