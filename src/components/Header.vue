/*
	Header component
*/


<template>
	<p>Header component</p>
</template>


<script>
	// Components
	import i18n from '../services/i18n'


	export default {
		data () {
			return {
				i18n: i18n.general.search,
				search_terms: '',
				// TODO: get this from Shopify data object
				linklists: [
					{
						title: 'Title',
						active: true,
						url: 'http://apple.com'
					},
					{
						title: 'About Us',
						active: false,
						url: 'http://nike.com'
					},
				]
			}
		}
	}
</script>


<style>
</style>
