<script lang="ts">
	import type { FooterLink } from '$lib/types';

	export let copyrightYear: number | string = '2024';
	export let companyName: string = 'SaaS Foundry';

	export let footerLinks: FooterLink[] = [
		{ href: '#', text: 'Terms of Service' },
		{ href: '/privacy', text: 'Privacy Policy' }
	];
</script>

<footer
	class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100"
>
	<p class="text-xs text-gray-600">
		&copy; {copyrightYear}
		{companyName}. All rights reserved.
	</p>
	<nav class="sm:ml-auto flex gap-4 sm:gap-6">
		{#each footerLinks as link}
			<a href={link.href} class="text-xs hover:underline underline-offset-4">
				{link.text}
			</a>
		{/each}
	</nav>
</footer>
