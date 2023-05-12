<script lang="ts">
	import type { cinematicsList } from '$lib/interfaces';
	import '../app.css';
	import NavLink from '$lib/components/navLink.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import { cinematics } from '$lib/stores';
	import { Toaster } from 'svelte-french-toast';
	import { slide, blur } from 'svelte/transition';
	import NavMobileLink from '$lib/components/navMobileLink.svelte';


	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
			showMobileMenu = false;
		}
	}

	let cinematicsValue: cinematicsList[] = [];

	cinematics.subscribe((value) => {
		cinematicsValue = value;
	});

	let showMobileMenu: boolean = false;
	
</script>

<Toaster />
<nav class="sticky top-0 h-auto mb-2 md:static">
	<div class="hidden px-2 py-1 mx-auto md:block max-w-7xl md:py-2">
		<ul class="flex items-center">
			<li class="flex-1">
				<a
					href="/"
					class="text-4xl font-bold transition-colors text-main-black-primary hover:text-main-primary"
				>
					Cinemática
				</a>
			</li>

			{#each cinematicsValue as c}
				<NavLink href={c.slug}>
					{c.acronim || c.name}
				</NavLink>
			{/each}
		</ul>
	</div>
	<div class="relative flex items-center justify-center px-4 py-2 mx-auto bg-white border-b-2 md:hidden max-w-7xl">
		<button class="absolute left-0 w-10 h-10 fill-main-black-primary" on:click={() => (showMobileMenu = !showMobileMenu)}>
			{#if showMobileMenu}
				<i in:blur|local={{ duration: 250 }}>
					<svg class="w-full h-full p-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
						/></svg
					>
				</i>
			{:else}
				<i in:blur|local={{ duration: 250 }}>
					<svg class="w-full h-full p-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
						/></svg
					>
				</i>
			{/if}
		</button>
		<a class="text-2xl font-bold text-center text-main-black-primary" href="/"> Cinemática </a>
		{#if showMobileMenu}
			<ul
				class="absolute flex flex-col w-full h-auto bg-white rounded-b-lg shadow-lg top-full"
				transition:slide|local
			>
				{#each cinematicsValue as c}
					<NavMobileLink href={c.slug}>
						{c.acronim || c.name}
					</NavMobileLink>
				{/each}
			</ul>
		{/if}
	</div>
</nav>

<main class="main-container">
	<slot />
</main>
