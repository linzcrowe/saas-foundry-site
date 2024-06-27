<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();

	const headerLinks = [
		{ href: '/#services', text: 'Our Services' },
		{ href: '/#contact', text: 'Contact Us' },
		{ href: '/innovation-lab', text: 'Innovation lab'}
	];
</script>

<Header navLinks={headerLinks} siteName="SaaS Foundry" /> 
<slot></slot>

<style></style>
