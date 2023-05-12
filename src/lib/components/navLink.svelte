<script lang="ts">
	import { browser } from '$app/environment';
	import { navigating } from '$app/stores';

	export let href: string;
	let activeUrl: boolean = false;

	$: {
		if (!$navigating) {
			if (browser) {
				activeUrl = window.location.pathname === `/${href}` && href !== '/' ? true : false;
			}
		}
	}
</script>

<li
	class={`transition-colors h-full flex justify-center items-end text-xl font-semibold mb-2 ${
		activeUrl ? 'border-b-[3px] border-main-primary font-bold text-main-primary' : 'text-neutral-600'
	}`}
>
	{#if !activeUrl}
		<a sapper:prefetch class="px-3 capitalize transition-colors hover:text-main-primary" {href}>
			<slot />
		</a>
	{:else}
		<span class="px-3 capitalize">
			<slot />
		</span>
	{/if}
</li>
