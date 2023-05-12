<script lang="ts">
	import { handleInputsMru } from '$lib/cinematics/mru/main';
	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';
	import ResultContainer from '$lib/components/resultContainer.svelte';
	import {
		speedMagnitudes,
		type mruInputs,
		type result,
		type mruMagnitudes,
		distanceMagnitudes,
		timeMagnitudes
	} from '$lib/interfaces';
	import { inputsMru, magnitudesMru, resultMru } from '$lib/stores';

	let inputs: mruInputs;

	inputsMru.subscribe((value) => {
		inputs = value;
	});

	let results: result[];

	resultMru.set([]);
	resultMru.subscribe((value) => {
		results = value;
	});

	let magnitudes: mruMagnitudes;
	magnitudesMru.set({})
	magnitudesMru.subscribe((value) => {
		magnitudes = value;
	});
</script>

<HeadTitle title="MRU" />
<Banner title="Movimiento rectilineo uniforme" />
<form class="main-form" autocomplete="off">
	<fieldset class="main-fieldset">
		<div class="flex flex-col flex-1">
			<label class="title-label" for="speed">Velocidad</label>
			<div class="flex space-x-1">
				<input
					name="speed"
					type="number"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad"
					bind:this={inputs.speed}
					on:input={() => handleInputsMru()}
				/>
				<select
					class="w-1/3 custom-select-clean"
					bind:value={magnitudes.speed}
					on:change={() => {
						handleInputsMru();
					}}
				>
					{#each Object.entries(speedMagnitudes) as magnitude}
						<option value={magnitude}>
							{magnitude[1]}
						</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="flex flex-col flex-1">
			<label class="title-label" for="distance">Distancia</label>
			<div class="flex space-x-1">
				<input
					type="number"
					name="distance"
					class="w-2/3 custom-input"
					placeholder="Ingresa la distancia"
					bind:this={inputs.distance}
					on:input={() => handleInputsMru()}
				/>
				<select
					class="w-1/3 custom-select-clean"
					bind:value={magnitudes.distance}
					on:change={() => {
						handleInputsMru();
					}}
				>
					{#each Object.entries(distanceMagnitudes) as magnitude}
						<option value={magnitude}>
							{magnitude[1]}
						</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="flex flex-col flex-1">
			<label class="title-label" for="time">Tiempo</label>
			<div class="flex space-x-1">
				<input
					type="number"
					name="time"
					class="w-2/3 custom-input"
					placeholder="Ingresa el tiempo"
					bind:this={inputs.time}
					on:input={() => handleInputsMru()}
				/>
				<select
					class="w-1/3 custom-select-clean"
					bind:value={magnitudes.time}
					on:change={() => {
						handleInputsMru();
					}}
				>
					{#each Object.entries(timeMagnitudes) as magnitude}
						<option value={magnitude}>
							{magnitude[1]}
						</option>
					{/each}
				</select>
			</div>
		</div>
	</fieldset>
	<ResultContainer {results} />
</form>
<!-- <canvas id="canvas" class="w-full mt-2 border-2 border-orange-200 h-96" /> -->
