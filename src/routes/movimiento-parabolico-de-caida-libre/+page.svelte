<script lang="ts">
	import { speedMagnitudes, type mpdclInputs, type mpdclMagnitudes, type result, angleTangentialMagnitudes, timeMagnitudes, distanceMagnitudes } from '$lib/interfaces';

	import Banner from '$lib/components/navigation/banner.svelte';
	import HeadTitle from '$lib/components/navigation/headTitle.svelte';

	import { inputsMpdcl,  magnitudesMpdcl,  resultsMpdcl } from '$lib/stores';
	import { handleInputsMpdcl } from '$lib/cinematics/mpdcl/main';
	import ResultContainer from '$lib/components/resultContainer.svelte';

	let inputs: mpdclInputs;

	inputsMpdcl.subscribe((value) => {
		inputs = value;
	});

	let results: result[];

	resultsMpdcl.set([])
	resultsMpdcl.subscribe((value) => {
		results = value;
	});

	let magnitudes: mpdclMagnitudes
	magnitudesMpdcl.set({})
	magnitudesMpdcl.subscribe((value) => {
		magnitudes = value
	})

</script>

<HeadTitle title="MPDCL" />
<Banner title="Movimiento parabolico de caída libre" />
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
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.initialSpeed}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="initialSpeedX">Velocidad Inicial en X</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="initialSpeedX"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad inicial en X"
					bind:this={inputs.initialSpeedX}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.initialSpeedX}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="initialSpeedY">Velocidad Inicial en Y</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="initialSpeedY"
					class="w-2/3 custom-input"
					placeholder="Ingresa la velocidad inicial en Y"
					bind:this={inputs.initialSpeedY}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
							class="w-1/3 custom-select-clean"
							bind:value={magnitudes.initialSpeedY}
							on:change={() => {
								handleInputsMpdcl();
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
				<label class="title-label" for="angle">Ángulo</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="angle"
					class="w-2/3 custom-input"
					placeholder="Ingresa el ángulo"
					bind:this={inputs.angle}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.angle}
						on:change={() => {
							handleInputsMpdcl();
						}}
					>
						{#each Object.entries(angleTangentialMagnitudes) as magnitude}
							<option value={magnitude}>
								{magnitude[1]}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="flex flex-col flex-1">
				<label class="title-label" for="riseTime">Tiempo de subida</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="riseTime"
					class="w-2/3 custom-input"
					placeholder="Ingresa el tiempo de subida"
					bind:this={inputs.riseTime}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.riseTime}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="flightTime">Tiempo de vuelo (total)</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="flightTime"
					class="w-2/3 custom-input"
					placeholder="Ingresa el tiempo de vuelo"
					bind:this={inputs.flightTime}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.flightTime}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="initialHeight">Altura inicial</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="initialHeight"
					class="w-2/3 custom-input"
					placeholder="Ingresa la altura inicial"
					bind:this={inputs.initialHeight}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.initialHeight}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="maxHeight">Altura máxima</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="maxHeight"
					class="w-2/3 custom-input"
					placeholder="Ingresa la altura máxima"
					bind:this={inputs.maxHeight}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.maxHeight}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="horizontalDisplacement">Desplazamiento horizontal</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="horizontalDisplacement"
					class="w-2/3 custom-input"
					placeholder="Ingresa el desplazamiento horizontal"
					bind:this={inputs.horizontalDisplacement}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.horizontalDisplacement}
						on:change={() => {
							handleInputsMpdcl();
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
				<label class="title-label" for="horizontalReach">Alcance horizontal</label>
				<div class="flex space-x-4">
					<input
					type="number"
					step="any"
					name="horizontalReach"
					class="w-2/3 custom-input"
					placeholder="Ingresa el alcance horizontal"
					bind:this={inputs.horizontalReach}
					on:input={() => handleInputsMpdcl()}
					/>
					<select
						class="w-1/3 custom-select-clean"
						bind:value={magnitudes.horizontalReach}
						on:change={() => {
							handleInputsMpdcl();
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
