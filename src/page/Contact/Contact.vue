<style src="./Contact.scss" module lang="scss"></style>
<script src="./Contact.js"></script>

<template>
  <div :class="$style.contact">
    <h2>contact</h2>
    <ul :class="$style.list">
      <li 
        v-for="item in list"
        :key="item"
        :class="$style.item"
        ref="list"
      >
        <img :class="$style.img" :src="`https://picsum.photos/g/500/500/?image=${item}`" alt="">
      </li>
    </ul>
  </div>
</template>
