<script lang="ts">
	import {
		speedMagnitudes,
		type freeFallMagnitudes,
		type freefallInputs,
		type result,
		distanceMagnitudes,
		timeMagnitudes
	} from '$lib/interfaces';

	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	import { fixExpression } from '$lib/utils';
	import { inputsFreefall, magnitudesFreefall, resultsFreefall } from '$lib/stores';
	import { handleInputsFreefall } from '$lib/cinematics/freefall/main';
	import ResultContainer from '$lib/components/resultContainer.svelte';

	let inputs: freefallInputs;

	inputsFreefall.subscribe((value) => {
		inputs = value;
	});

	let results: result[];

	resultsFreefall.set([]);
	resultsFreefall.subscribe((value) => {
		results = value;
	});

	let magnitudes: freeFallMagnitudes;

	magnitudesFreefall.set({});
	magnitudesFreefall.subscribe((value) => {
		magnitudes = value;
	});
</script>

<HeadTitle title="Caida Libre" />
<Banner title="Caida libre" />
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
						placeholder="Ingresa la velocidad inicial"
						bind:this={inputs.initialSpeed}
						on:input={() => handleInputsFreefall()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.initialSpeed}
						on:change={() => {
							handleInputsFreefall();
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
				<label class="title-label" for="finalSpeed">Velocidad Final</label>
				<div class="flex space-x-4">
					<input
						type="number"
						step="any"
						name="finalSpeed"
						class="w-2/3 custom-input"
						placeholder="Ingresa la velocidad final"
						bind:this={inputs.finalSpeed}
						on:input={() => handleInputsFreefall()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.finalSpeed}
						on:change={() => {
							handleInputsFreefall();
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
						placeholder="Ingresa la altura"
						bind:this={inputs.height}
						on:input={() => handleInputsFreefall()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.height}
						on:change={() => {
							handleInputsFreefall();
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
						on:input={() => handleInputsFreefall()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.time}
						on:change={() => {
							handleInputsFreefall();
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
						placeholder="Ingresa la gravedad"
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
