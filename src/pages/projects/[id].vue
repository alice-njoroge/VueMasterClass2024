<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();

</script>

<template>
<h2> Project {{route.params.id}} </h2>
</template>

<style scoped>

</style>