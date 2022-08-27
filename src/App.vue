<template>
    <div class="w-screen h-screen flex flex-col">
        <nav class="bg-red-500 p-3 text-center text-white text-2xl font-bold"><router-link to="/">Home</router-link></nav>
        <router-view />
    </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
