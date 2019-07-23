/*
	template routes

	match generic page routes or add custom versions
*/

// Components
import PageView from './views/PageView.vue'

export const routes = [
	{ path: '/products/:slug', component: ProductDetailView },

	{ path: '/pages/:slug', component: PageView },
]
