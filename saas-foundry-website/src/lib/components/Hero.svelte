<script lang="ts">
	export let headline: string = 'Launching Innovative SaaS Products';
	export let description: string =
		'We partner with industry leaders to create targeted, high-impact SaaS solutions.';
	export let imageUrl: string;
	export let buttonText: string = 'Get in Touch';
	export let buttonLink: string = '#contact';
</script>

<section class="w-full py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6 mx-auto">
		<div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
			<div class="flex flex-col justify-center space-y-4">
				<div class="space-y-2">
					<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
						{headline}
					</h1>
					<p class="max-w-[600px] text-gray-600 md:text-xl">
						{description}
					</p>
				</div>
				<div class="flex flex-col gap-2 min-[400px]:flex-row">
					<a
						href={buttonLink}
						class="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
					>
						{buttonText}
					</a>
				</div>
			</div>
			<img
				src={imageUrl}
				alt="Hero"
				class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
				width="550"
				height="550"
			/>
		</div>
	</div>
</section>
