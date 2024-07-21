<script lang="ts">
	import Logo from '$lib/assets/header-logo.png';
	import type { NavLink } from '$lib/types';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from 'flowbite-svelte';

	export let navLinks: NavLink[] = [
		{ href: '#services', text: 'Services' },
		{ href: '#contact', text: 'Contact' }
	];
</script>

<header>
	<div class="relative px-8">
		<Navbar class="fixed start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4">
			<NavBrand href="/">
				<img src={Logo} class="me-3 h-6 sm:h-9" alt="SaaS Foundry Logo" />
			</NavBrand>
			<NavHamburger />
			<NavUl>
				{#each navLinks as link}
					<NavLi href={link.href}>{link.text}</NavLi>
				{/each}
			</NavUl>
		</Navbar>
	</div>
</header>

<style>
	.MenuIcon {
		display: block; /* Make it a block element for sizing */
		width: 24px;
		height: 24px;
	}
</style>
