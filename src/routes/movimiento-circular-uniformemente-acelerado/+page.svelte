<script lang="ts">
	import {  speedAngularMagnitudes, type mcuaInputs, type mcuaMagnitudes, type result, angleAngularMagnitudes, accelerationAngularMagnitudes, speedMagnitudes, distanceMagnitudes, accelerationTangentialMagnitudes, timeMagnitudes } from '$lib/interfaces';

	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	import { inputsMcua,  magnitudesMcua,  resultsMcua } from '$lib/stores';
	import ResultContainer from '$lib/components/resultContainer.svelte';
	import { handleInputsMcua } from '$lib/cinematics/mcua/main';

	let inputs: mcuaInputs;

	inputsMcua.subscribe((value) => {
		inputs = value;
	});

	let results: result[];

	resultsMcua.set([])
	resultsMcua.subscribe((value) => {
		results = value;
	});

	let magnitudes: mcuaMagnitudes

	magnitudesMcua.set({})
	magnitudesMcua.subscribe((value) => {
		magnitudes = value
	})
	
</script>

<HeadTitle title="MCUA" />
<Banner title="Movimiento circular uniformemente acelerado" />
<form class="main-form">
	{#if inputs}
		<fieldset class="main-fieldset">
			<div class="flex flex-col flex-1">
				<label class="title-label" for="angularInitialSpeed">Velocidad Angular Inicial</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="angularInitialSpeed"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad angular"
					bind:this={inputs.angularInitialSpeed}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angularInitialSpeed}
						on:change={() => {
							handleInputsMcua();
						}}
					>
						{#each Object.entries(speedAngularMagnitudes) as magnitude}
							<option value={magnitude}>
								{magnitude[1]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="flex flex-col flex-1">
				<label class="title-label" for="angularFinalSpeed">Velocidad Angular Final</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="angularFinalSpeed"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad angular"
					bind:this={inputs.angularFinalSpeed}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angularFinalSpeed}
						on:change={() => {
							handleInputsMcua();
						}}
					>
						{#each Object.entries(speedAngularMagnitudes) as magnitude}
							<option value={magnitude}>
								{magnitude[1]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="flex flex-col flex-1">
				<label class="title-label" for="angle">Ángulo</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="angle"
					class="w-2/3 custom-input"
					placeholder="Ingresa el ángulo"
					bind:this={inputs.angle}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angle}
						on:change={() => {
							handleInputsMcua();
						}}
					>
						{#each Object.entries(angleAngularMagnitudes) as magnitude}
							<option value={magnitude}>
								{magnitude[1]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="flex flex-col flex-1">
				<label class="title-label" for="angularAcceleration">Aceleración angular</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="angularAcceleration"
					class="w-2/3 custom-input"
					placeholder="Ingresa la aceleración centripeta"
					bind:this={inputs.angularAcceleration}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angularAcceleration}
						on:change={() => {
							handleInputsMcua();
						}}
					>
						{#each Object.entries(accelerationAngularMagnitudes) as magnitude}
							<option value={magnitude}>
								{magnitude[1]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="flex flex-col flex-1">
				<label class="title-label" for="tangentialInitialSpeed">Velocidad Tangencial Inicial</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="tangentialInitialSpeed"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad tangencial"
					bind:this={inputs.tangentialInitialSpeed}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.tangentialInitialSpeed}
						on:change={() => {
							handleInputsMcua();
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
				<label class="title-label" for="tangentialInitialSpeed">Velocidad Tangencial Final</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="tangentialFinalSpeed"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad tangencial"
					bind:this={inputs.tangentialFinalSpeed}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.tangentialFinalSpeed}
						on:change={() => {
							handleInputsMcua();
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
				<label class="title-label" for="arcLenght">Longitud del arco</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="arcLenght"
					class="w-2/3 custom-input"
					placeholder="Ingresa la longitud del arco"
					bind:this={inputs.arcLenght}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.arcLenght}
						on:change={() => {
							handleInputsMcua();
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
				<label class="title-label" for="tangentialAcceleration">Aceleración tangencial</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="tangentialAcceleration"
					class="w-2/3 custom-input"
					placeholder="Ingresa la aceleración centripeta"
					bind:this={inputs.tangentialAcceleration}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.tangentialAcceleration}
						on:change={() => {
							handleInputsMcua();
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
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.time}
						on:change={() => {
							handleInputsMcua();
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
                <label class="w-2/3 title-label" for="ratio">Radio (si no tienes los datos angulares o tangenciales sera de gran ayuda)</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="ratio"
					class="w-2/3 custom-input"
					placeholder="Ingresa el radio"
					bind:this={inputs.ratio}
					on:input={() => handleInputsMcua()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.ratio}
						on:change={() => {
							handleInputsMcua();
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
		</fieldset>
	{/if}
	<ResultContainer {results} />
</form>
<!-- <canvas id="canvas" class="w-full mt-2 border-2 border-orange-200 h-96" /> -->
