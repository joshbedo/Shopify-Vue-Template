<template>
	<div class="app_wrap page-width">
		<app-header />
		<app-footer />
	</div>
</template>

<script>
	import Footer from './components/Footer'
	import Header from './components/Header'

	export default {
		components: {
			AppHeader : Header,
			AppFooter : Footer,
		},

		data () {
			return {
			}
		}
	}
</script>


<style>
	.app_wrap {
		margin: 40px 0;
	}
</style>
