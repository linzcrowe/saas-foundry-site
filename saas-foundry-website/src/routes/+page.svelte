<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import heroImage from '$lib/assets/homepage-hero-primary.jpg';
	import servicesImage from '$lib/assets/homepage-services.jpg';

	// Data for the components
	const headerLinks = [
		{ href: '#services', text: 'Our Services' },
		{ href: '#contact', text: 'Contact Us' }
	];

	const heroData = {
		imageUrl: heroImage, 
		headline: 'Is Your Industry Lacking the Perfect Software Solution?', 
		description:
			"We partner with businesses to build affordable SaaS products that unlock success in underserved markets. ", // Updated description 
		buttonText: "Let's Explore the Potential", // Updated button
		buttonLink: '#contact'
	};

	const servicesData = {
		sectionTitle: 'Simple Solutions. Measurable Results.', 
		servicesDescription:
			'We handle the complexities of building the SaaS product, while  you focus on what you do best – providing the industry expertise. We collaborate every step of the way, ensuring your input guides our roadmap.',
		servicesImage: servicesImage,
		services: [
			{
				title: 'Product Development',
				description: 'We transform your vision into an intuitive, easy-to-use platform that delivers tangible value for your business.' 
			},
			{
				title: 'Go-to-Market Strategy',
				description: 'We’ll work together to reach the right customers from day one with a launch plan tailored to maximize impact within our target market.' // Updated description 
			},
			{
				title: 'Ongoing Support',
				description:
					'We provide ongoing maintenance, updates, and dedicated support, so you can focus on leveraging the platform for your business growth.' 
			}
		]
	};

	const contactData = {
		sectionTitle: 'Shape the Future of Your Industry.', // Updated section title
		contactDescription:
			'Schedule a free consultation to explore how a partnership with SaaS Foundry can unlock new opportunities for your business.', // Updated description 
		placeholderText: 'Your email address',
		buttonText: 'Contact Us Today' 
	};

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

<Header navLinks={headerLinks} siteName="SaaS Foundry" /> 
<Hero {...heroData} />
<Services {...servicesData} />
<Contact {...contactData} />
<Footer {...footerData} />
