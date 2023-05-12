<script lang="ts">
	import {
		speedMagnitudes,
		type result,
		type verticalshotInputs,
		type verticalshotMagnitudes,

		distanceMagnitudes,

		timeMagnitudes


	} from '$lib/interfaces';

	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	import { inputsVerticalshot, magnitudesVerticalshot, resultsVerticalshot } from '$lib/stores';
	import { handleInputsVerticalshot } from '$lib/cinematics/verticalshot/main';
	import ResultContainer from '$lib/components/resultContainer.svelte';

	let inputs: verticalshotInputs;

	inputsVerticalshot.subscribe((value) => {
		inputs = value;
	});

	let results: result[];
	resultsVerticalshot.set([]);
	resultsVerticalshot.subscribe((value) => {
		results = value;
	});

	let magnitudes: verticalshotMagnitudes;
	magnitudesVerticalshot.set({});
	magnitudesVerticalshot.subscribe((value) => {
		magnitudes = value;
	});
</script>

<HeadTitle title="Tiro vertical" />
<Banner title="Tiro vertical" />
<form class="main-form">
	{#if inputs}
		<fieldset class="main-fieldset">
			<div class="flex flex-col flex-1">
				<label class="title-label" for="initialSpeed">Velocidad Inicial</label>
				<div class="flex space-x-4">
					<input
						type="number"
						step="any"
						name="initialSpeed"
						class="w-2/3 custom-input"
						placeholder="Ingresa la velocidad"
						bind:this={inputs.initialSpeed}
						on:input={() => handleInputsVerticalshot()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.initialSpeed}
						on:change={() => {
							handleInputsVerticalshot();
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
				<label class="title-label" for="height">Altura</label>
				<div class="flex space-x-4">
					<input
						type="number"
						step="any"
						name="height"
						class="w-2/3 custom-input"
						placeholder="Ingresa la distancia"
						bind:this={inputs.height}
						on:input={() => handleInputsVerticalshot()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.height}
						on:change={() => {
							handleInputsVerticalshot();
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
				<div class="flex space-x-4">

					<input
					type="number"
					step="any"
					name="time"
					class="w-2/3 custom-input"
					placeholder="Ingresa el tiempo"
					bind:this={inputs.time}
					on:input={() => handleInputsVerticalshot()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.time}
						on:change={() => {
							handleInputsVerticalshot();
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
			<div class="flex flex-col flex-1">
				<label class="title-label" for="gravity">Gravedad</label>
				<div class="flex space-x-4">
					<input
						type="number"
						step="any"
						name="gravity"
						class="w-2/3 custom-input"
						placeholder="Ingresa el tiempo"
						disabled
						bind:this={inputs.gravity}
						value="9.81"
					/>
					<span class="flex items-center w-1/3 px-4 font-semibold">
						m/s<sup>2</sup>
					</span>
				</div>
			</div>
		</fieldset>
	{/if}
	<ResultContainer {results} />
</form>
<!-- <canvas id="canvas" class="w-full mt-2 border-2 border-orange-200 h-96" /> -->
