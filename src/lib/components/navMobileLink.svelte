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
	class={`py-2 transition-colors h-full w-full flex justify-center items-end text-lg font-semibold ${
		activeUrl ? 'font-bold bg-main-light text-main-primary' : 'text-neutral-700'
	}`}
>
		<a sapper:prefetch class="w-full px-3 text-center capitalize transition-colors hover:text-main-secondary" {href}>
			<slot />
		</a>
</li>
