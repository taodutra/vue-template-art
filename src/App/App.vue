<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
	<div :class="$style.app">
		<HeaderBox />
		<transition
			@enter="onEnter"
			@leave="onLeave"
		>
			<router-view />
		</transition>
		<FooterBox />
	</div>
</template>
