<style src="./About.scss" module lang="scss"></style>
<script src="./About.js"></script>

<template>
  <div :class="$style.about">
    <h2>About</h2>
    <ul :class="$style.list">
      <li 
        v-for="item in list"
        :key="item"
        :class="$style.item"
        ref="list"
      ><img :src="`https://picsum.photos/g/500/500/?image=${item}`" alt=""></li>
    </ul>
  </div>
</template>
