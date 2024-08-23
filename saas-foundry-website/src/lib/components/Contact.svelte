<script lang="ts">
	export let sectionTitle: string = 'Get in Touch';
	export let contactDescription: string =
		"Let's discuss how we can partner to launch your next innovative SaaS product.";
	export let placeholderText: string = 'Enter your email';
	export let buttonText: string = 'Get in Touch';

	let email: string = '';

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		// Handle form submission here (e.g., send data to your backend)
		console.log('Email submitted:', email);
		email = '';
	};
</script>

<section id="contact" class="w-full py-12 md:py-24 lg:py-32">
	<div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
		<div class="space-y-3">
			<h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
				{sectionTitle}
			</h2>
			<!-- <p
				class="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
				{contactDescription}
			</p> -->
			<p
				class="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
			>
			We're excited to partner with you to build the next generation of SaaS platforms and AI tools. If you're interested in exploring the possibilities, please send an email to <a href="mailto:lindsey@onebigocean.com.au" class="underline underline-offset-2">lindsey@onebigocean.com.au</a> and we'll get back to you as soon as possible.
			</p>
		</div>
		<div class="mx-auto w-full max-w-sm space-y-2">
			<!-- <form class="flex gap-2" on:submit|preventDefault={handleSubmit}>
				<input
					type="email"
					placeholder={placeholderText}
					class="max-w-lg flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					bind:value={email}
				/>
				<button
					type="submit"
					class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					{buttonText}
				</button>
			</form> -->
			<p class="text-xs text-gray-600">
				We'll get back to you as soon as possible.
				<a href="/privacy" class="underline underline-offset-2"> Privacy Policy </a>
			</p>
		</div>
	</div>
</section>
