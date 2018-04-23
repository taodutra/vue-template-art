<style src="./HeaderBox.scss" module lang="scss"></style>
<script src="./HeaderBox.js"></script>

<template>
  <div>
    <ul>
      <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
      <li><router-link :to="{ name: 'about' }">ABOUT</router-link></li>
      <li><router-link :to="{ name: 'contact' }">CONTACT</router-link></li>
      <li><router-link :to="{ name: 'category', params: { categoty: 'art' } }">CATEGORY ART</router-link></li>
      <li><router-link :to="{ name: 'post', params: { slug: 'art' } }">POST ART</router-link></li>

    </ul>
  </div>
</template>
