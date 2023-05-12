<script lang="ts">
	import type { cinematicsList } from '$lib/interfaces';
	import { cinematics } from '$lib/stores';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	let cinematicsValue: cinematicsList[] = [] as cinematicsList[];

	cinematics.subscribe((value) => {
		cinematicsValue = value;
	});
</script>

<HeadTitle title="Inicio" />

<div class="p-4 bg-white rounded-lg shadow md:px-12">
	<h1 class="text-5xl font-bold text-center text-main-black-primary">Aplicación de cinemática</h1>
	<p class="max-w-xl mx-auto mt-6 font-semibold text-center text-main-black-secondary">
		En esta aplicación encuentras todos los tipos de movimiento de cinemática que puedes calcular,
		solo haz click en ellos desde la barra de navegación o en las tarjetas de abajo
	</p>

	<ul class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
		{#each cinematicsValue as cinematic, index}
			<li
				class={index === cinematicsValue.length - 1 && cinematicsValue.length % 2 !== 0
					? 'col-span-full'
					: ''}
			>
				<a
					href={`/${cinematic.slug}`}
					class="flex items-center justify-center w-full h-32 p-4 text-2xl font-bold text-center capitalize transition-colors text-main-primary bg-main-light rounded-xl hover:bg-white hover:border-4 hover:border-main-primary hover:text-main-primary"
				>
					{cinematic.name}
				</a>
			</li>
		{/each}
	</ul>
</div>
