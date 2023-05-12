<script lang="ts">
	import type { result } from '$lib/interfaces';
	import { fixExpression } from '$lib/utils';

	export let results: result[];
</script>

<div
	class="flex flex-col items-center w-full p-4 mt-6 space-y-10 bg-white rounded-lg shadow md:space-y-0 md:w-3/5 justify-evenly md:mt-0"
>
	{#if !(results && results.length > 0)}
		<p
			class="flex items-center justify-center w-full h-full text-2xl font-bold text-center text-main-black-secondary md:text-3xl"
		>
			<span class="flex flex-col">
				Ingresa los datos <span class="text-base font-semibold md:text-lg text-main-black-light"
					>(Los resultados se mostrarán automáticamente)</span
				>
			</span>
		</p>
	{:else}
		{#each results as result}
			<div class="flex flex-col space-y-4">
				<span class="text-xl font-semibold text-center text-main-primary">
					{result.name}: {fixExpression(result.value)} {@html result.magnitude}</span
				>
				<p class="italic">
					{result.name} = {@html result.formula} = {fixExpression(result.value)}
				</p>
			</div>
		{/each}
	{/if}
</div>
