<script lang="ts">
	import { angleAngularMagnitudes, timeMagnitudes, type mcuInputs, type mcuMagnitudes, type result, speedAngularMagnitudes, speedMagnitudes, distanceMagnitudes, frecuencyMagnitudes, accelerationTangentialMagnitudes } from '$lib/interfaces';

	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	import { inputsMcu,  magnitudesMcu,  resultsMcu } from '$lib/stores';
	import { handleInputsMcu } from '$lib/cinematics/mcu/main';
	import ResultContainer from '$lib/components/resultContainer.svelte';

	let inputs: mcuInputs;

	inputsMcu.subscribe((value) => {
		inputs = value;
	});

	let results: result[];

	resultsMcu.set([])
	resultsMcu.subscribe((value) => {
		results = value;
	});
	
	let magnitudes: mcuMagnitudes
	magnitudesMcu.set({})
	magnitudesMcu.subscribe((value) => {
		magnitudes = value
	})


</script>

<HeadTitle title="MCU" />
<Banner title="Movimiento circular uniforme" />
<form class="main-form">
	{#if inputs}
		<fieldset class="main-fieldset">
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
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angle}
						on:change={() => {
							handleInputsMcu();
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
				<label class="title-label" for="time">Tiempo</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="time"
					class="w-2/3 custom-input"
					placeholder="Ingresa el tiempo"
					bind:this={inputs.time}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.time}
						on:change={() => {
							handleInputsMcu();
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
				<label class="title-label" for="angularSpeed">Velocidad Angular</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="angularSpeed"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad angular"
					bind:this={inputs.angularSpeed}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angularSpeed}
						on:change={() => {
							handleInputsMcu();
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
				<label class="title-label" for="tangentialSpeed">Velocidad tangencial</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="tangentialSpeed"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad tangencial"
					bind:this={inputs.tangentialSpeed}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.tangentialSpeed}
						on:change={() => {
							handleInputsMcu();
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
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.arcLenght}
						on:change={() => {
							handleInputsMcu();
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
				<label class="title-label" for="diameter">Diámetro</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="diameter"
					class="w-2/3 custom-input"
					placeholder="Ingresa el diámetro"
					bind:this={inputs.diameter}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.diameter}
						on:change={() => {
							handleInputsMcu();
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
				<label class="w-2/3 title-label" for="ratio">Radio (necesario para obtener todos los datos)</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="ratio"
					class="w-2/3 custom-input"
					placeholder="Ingresa el radio"
					bind:this={inputs.ratio}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.ratio}
						on:change={() => {
							handleInputsMcu();
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
				<label class="title-label" for="period">Periodo</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="period"
					class="w-2/3 custom-input"
					placeholder="Ingresa el período"
					bind:this={inputs.period}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.period}
						on:change={() => {
							handleInputsMcu();
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
				<label class="title-label" for="frecuency">Frecuencia</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="frecuency"
					class="w-2/3 custom-input"
					placeholder="Ingresa la frecuencia"
					bind:this={inputs.frecuency}
					on:input={() => handleInputsMcu()}
					/>
					<select
							class="w-1/3 custom-select-clean"
							bind:value={magnitudes.frecuency}
							on:change={() => {
								handleInputsMcu();
							}}
						>
							{#each Object.entries(frecuencyMagnitudes) as magnitude}
								<option value={magnitude}>
									{magnitude[1]}
								</option>
							{/each}
						</select>
				</div>
			</div>
				<div class="flex flex-col flex-1">
				<label class="title-label" for="centripetalAcceleration">Aceleración centripeta</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="centripetalAcceleration"
					class="w-2/3 custom-input"
					placeholder="Ingresa la aceleración centripeta"
					bind:this={inputs.centripetalAcceleration}
					on:input={() => handleInputsMcu()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.centripetalAcceleration}
						on:change={() => {
							handleInputsMcu();
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
