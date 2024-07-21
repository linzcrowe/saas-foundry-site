<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	injectSpeedInsights();

	const headerLinks = [
		{ href: '/about/', text: 'About Us' },
		{ href: '/#services', text: 'Our Services' },
		{ href: '/innovation-lab', text: 'Innovation Lab' },
		{ href: '/#contact', text: 'Contact Us' }
	];

	const footerData = {
		copyrightYear: '2024',
		companyName: 'SaaS Foundry',
		footerLinks: [
			{ href: '#', text: 'Terms of Service' },
			{ href: '/privacy', text: 'Privacy Policy' },
			{ href: '#', text: 'Cookie Policy' }
		]
	};
</script>

<div class="flex min-h-screen flex-col">
	<Header navLinks={headerLinks} siteName="SaaS Foundry" />

	<div class="mx-auto flex-grow  py-10 pb-16">
		<slot></slot>
	</div>

	<Footer {...footerData} />
</div>
