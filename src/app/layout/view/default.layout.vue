<script lang="ts" setup>
import {RouterView} from 'vue-router';

import HeaderBar from '@/app/layout/components/header-bar.vue';
import FooterBar from '@/app/layout/components/footer-bar.vue';
</script>

<template>
  <header-bar />
  <router-view />
  <footer-bar />
</template>
