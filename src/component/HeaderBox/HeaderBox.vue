<style src="./HeaderBox.scss" module lang="scss"></style>
<script src="./HeaderBox.js"></script>

<template>
  <div :class="$style.header">
    <ul :class="$style.nav">
      <li :class="$style.item"><router-link exact :active-class="$style.active" :to="{ name: 'home' }">HOME</router-link></li>
      <li :class="$style.item"><router-link :active-class="$style.active" :to="{ name: 'about' }">ABOUT</router-link></li>
      <li :class="$style.item"><router-link :active-class="$style.active" :to="{ name: 'contact' }">CONTACT</router-link></li>
      <li :class="$style.item"><router-link :active-class="$style.active" :to="{ name: 'category', params: { category: 'art' } }">CATEGORY ART</router-link></li>
      <li :class="$style.item"><router-link :active-class="$style.active" :to="{ name: 'post', params: { slug: 'art' } }">POST ART</router-link></li>
    </ul>
  </div>
</template>
