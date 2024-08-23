<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import heroImage from '$lib/assets/homepage-hero-primary.jpg';
	import servicesImage from '$lib/assets/homepage-services.jpg';

	// Data for the components
	const heroData = {
		imageUrl: heroImage,
		headline: 'Is Your Industry Lacking the Perfect Software Solution?',
		description:
			'We partner with businesses to build custom SaaS platforms and AI-powered tools that unlock success in underserved markets. ', 
		buttonText: "Let's Explore the Potential",
		buttonLink: '#contact'
	};

	const servicesData = {
		sectionTitle: 'Simple Solutions. Measurable Results.',
		servicesDescription:
			'We handle the complexities of building the SaaS product or tool, while you focus on what you do best – providing the industry expertise. We leverage the power of AI to deliver smarter, more efficient solutions. We collaborate every step of the way, ensuring your input guides our roadmap.',
		servicesImage: servicesImage,
		services: [
			{
				title: 'Product and Tool Development',
				description:
					'We transform your vision into an intuitive, easy-to-use platforms and tools that delivers tangible value for your business.'
			},
			{
				title: 'AI Integration',
				description:
					'We harness the power of AI to enhance our products and tools, providing smarter, more efficient solutions.'
			},
			{
				title: 'Go-to-Market Strategy',
				description:
					'We’ll work together to reach the right customers from day one with a launch plan tailored to maximize impact within our target market.' 
			},
			{
				title: 'Ongoing Support',
				description:
					'We provide ongoing maintenance, updates, and dedicated support, so you can focus on leveraging the platforms and tools for your business growth.'
			}
		]
	};

	const contactData = {
		sectionTitle: 'Shape the Future of Your Industry.',
		contactDescription:
			'Schedule a free consultation to explore how a partnership with SaaS Foundry can unlock new opportunities for your business.', 
		placeholderText: 'Your email address',
		buttonText: 'Contact Us Today'
	};
</script>

<Hero {...heroData} />
<Services {...servicesData} />
<Contact {...contactData} />
