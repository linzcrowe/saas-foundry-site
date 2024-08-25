<script>
	import heroImage from '$lib/assets/homepage-hero-primary.jpg';
	import { writable } from 'svelte/store';
	export let data;

	const insightsData = {
		sectionTitle: 'Insights & Knowledge Hub',
		description: 'Dive into our collection of articles, tips, and industry insights to stay ahead in the world of SaaS and AI-powered solutions.'
	};

	let filterText = writable('');
	let selectedTag = writable('');
	$: filteredPosts = data.posts.filter(post => 
		(post.title.toLowerCase().includes($filterText.toLowerCase()) || 
		(post.excerpt && post.excerpt.toLowerCase().includes($filterText.toLowerCase()))) &&
		($selectedTag === '' || (post.tags && post.tags.includes($selectedTag)))
	);

	$: allTags = [...new Set(data.posts.flatMap(post => post.tags || []))];
</script>

<main class="flex-grow mt-8">
	<!-- Hero Section -->
	<section class="relative bg-gray-900 text-white">
		<div class="absolute inset-0 z-0">
			<img src={heroImage} alt="Insights Hero" class="w-full h-full object-cover opacity-50">
		</div>
		<div class="relative z-10 container mx-auto py-20 px-4 text-center">
			<h1 class="text-5xl font-bold mb-4">{insightsData.sectionTitle}</h1>
			<p class="text-xl max-w-3xl mx-auto">{insightsData.description}</p>
		</div>
	</section>

	<!-- Insights List Section -->
	<section class="bg-white py-16">
		<div class="container mx-auto px-4">
			<!-- Filter input -->
			<div class="mb-8 flex flex-col md:flex-row gap-4">
				<input
					type="text"
					bind:value={$filterText}
					placeholder="Search insights..."
					class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
				<select
					bind:value={$selectedTag}
					class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="">All Tags</option>
					{#each allTags as tag}
						<option value={tag}>{tag}</option>
					{/each}
				</select>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredPosts as post}
					<div class="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
						{#if post.image}
							<img src={post.image} alt={post.title} class="w-full h-48 object-cover">
						{/if}
						<div class="p-6">
							<a href={`/insights/${post.slug}`} class="block">
								<h2 class="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">{post.title}</h2>
								<p class="text-gray-600 mb-4">{post.excerpt || 'Click to read more.'}</p>
								{#if post.tags}
									<div class="mb-4 flex flex-wrap gap-2">
										{#each post.tags as tag}
											<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tag}</span>
										{/each}
									</div>
								{/if}
								<div class="flex justify-between items-center">
									<span class="text-sm text-gray-500">{post.date || 'Recent'}</span>
									<span class="text-blue-600 hover:underline">Read More →</span>
								</div>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	/* Add any additional styles here if needed */
</style>
