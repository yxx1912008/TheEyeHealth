<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	html {
		margin: 0;
		padding: 0;
		height: 100vh;
		box-sizing: border-box;
	}
	
	body {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		background-color: #f4f4f4;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	
	img {
		width: 100%;
		height: auto;
		vertical-align: top;
		content: normal !important;
	}
	
	ul,
	li {
		list-style: none outside none;
		margin: 0;
		padding: 0;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>