<script lang="ts">
	import { MountainIcon } from '$lib/Icons';
	import type { NavLink } from '$lib/types';

	export let siteName: string = 'SaaS Foundry';

	export let navLinks: NavLink[] = [
		{ href: '#services', text: 'Services' },
		{ href: '#contact', text: 'Contact' }
	];
</script>

<header class="px-4 lg:px-6 h-14 flex items-center bg-gray-100 sticky top-0 z-50 bg-white">
	<div class="container mx-auto flex items-center justify-between w-full">
		<a href="/" class="flex items-center">
			<MountainIcon className="h-6 w-6" />
			<span class="sr-only">{siteName}</span>
		</a>
		<nav class="flex gap-4 sm:gap-6">
			{#each navLinks as link}
				<a href={link.href} class="text-sm font-medium hover:underline underline-offset-4">
					{link.text}
				</a>
			{/each}
		</nav>
	</div>
</header>
