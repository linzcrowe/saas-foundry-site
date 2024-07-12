<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  
	injectSpeedInsights();
  
	const headerLinks = [
	  { href: '/about/', text: 'About Us' },
	  { href: '/#services', text: 'Our Services' },
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
  
  <div class="min-h-screen flex flex-col">
	<Header navLinks={headerLinks} siteName="SaaS Foundry" />
  
	<main class="flex-grow container mx-auto py-10 px-4">
	  <slot></slot>
	</main>
  
	<Footer {...footerData} />
  </div>
  