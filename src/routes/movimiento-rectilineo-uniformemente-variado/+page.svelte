<script lang="ts">
	import {
		type result,
		type mruvInputs,
		type mruvMagnitudes,
		speedMagnitudes,
		distanceMagnitudes,
		timeMagnitudes,
		accelerationTangentialMagnitudes


	} from '$lib/interfaces';

	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	import { inputsMruv, magnitudesMruv, resultsMruv } from '$lib/stores';
	import { handleInputsMruv } from '$lib/cinematics/mruv/main';
	import ResultContainer from '$lib/components/resultContainer.svelte';

	let inputs: mruvInputs;

	inputsMruv.subscribe((value) => {
		inputs = value;
	});

	let results: result[];

	resultsMruv.set([]);
	resultsMruv.subscribe((value) => {
		results = value;
	});

	let magnitudes: mruvMagnitudes;
	magnitudesMruv.set({});
	magnitudesMruv.subscribe((value) => {
		magnitudes = value;
	});
</script>

<HeadTitle title="MRUV" />
<Banner title="Movimiento rectilineo uniformemente variado" />
<form class="main-form" autocomplete="off">
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
						on:input={() => handleInputsMruv()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.initialSpeed}
						on:change={() => {
							handleInputsMruv();
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
						on:input={() => handleInputsMruv()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.finalSpeed}
						on:change={() => {
							handleInputsMruv();
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
				<div class="flex space-x-4">
					<input
						type="number"
						step="any"
						name="distance"
						class="w-2/3 custom-input"
						placeholder="Ingresa la distancia"
						bind:this={inputs.distance}
						on:input={() => handleInputsMruv()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.distance}
						on:change={() => {
							handleInputsMruv();
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
						on:input={() => handleInputsMruv()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.time}
						on:change={() => {
							handleInputsMruv();
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
				<label class="title-label" for="acceleration">Aceleración</label>
				<div class="flex space-x-4">
					<input
						type="number"
						step="any"
						name="acceleration"
						class="w-2/3 custom-input"
						placeholder="Ingresa la aceleración"
						bind:this={inputs.acceleration}
						on:input={() => handleInputsMruv()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.acceleration}
						on:change={() => {
							handleInputsMruv();
						}}
					>
						{#each Object.entries(accelerationTangentialMagnitudes) as magnitude}
							<option value={magnitude}>
								{magnitude[1]}
							</option>
						{/each}
					</select>
				</div>
			</div>
		</fieldset>
	{/if}
	<ResultContainer {results} />
</form>
<!-- <canvas id="canvas" class="w-full mt-2 border-2 border-orange-200 h-96" /> -->
