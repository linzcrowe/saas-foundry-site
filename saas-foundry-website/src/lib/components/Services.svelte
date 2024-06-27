<script lang="ts">
	import type { Service } from '$lib/types';

	export let sectionTitle: string = 'Our Services';
	export let servicesDescription: string =
		'We partner with industry leaders to create targeted, high-impact SaaS solutions.';
	export let servicesImage: string = '/images/services.jpg';

	export let services: Service[] = [
		{
			title: 'Product Development',
			description: 'We work with you to design and build innovative SaaS products.'
		},
		{
			title: 'Go-to-Market Strategy',
			description: 'We help you develop and execute a successful go-to-market strategy.'
		},
		{
			title: 'Ongoing Support',
			description: "We provide ongoing support and maintenance to ensure your product's success."
		}
	];
</script>

<section id="services" class="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
	<div class="container px-4 md:px-6 mx-auto">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">{sectionTitle}</h2>
				<p
					class="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					{servicesDescription}
				</p>
			</div>
		</div>
		<div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
			<img
				src={servicesImage}
				alt="Services"
				class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
				width="550"
				height="310"
			/>
			<div class="flex flex-col justify-center space-y-4">
				<ul class="grid gap-6">
					{#each services as service}
						<li>
							<div class="grid gap-1">
								<h3 class="text-xl font-bold">{service.title}</h3>
								<p class="text-gray-600">{service.description}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
