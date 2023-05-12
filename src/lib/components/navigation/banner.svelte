<script lang="ts">
	export let title: string;
</script>

<div class="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow">
	<h1 class="text-3xl font-bold capitalize text-main-black-secondary">
		{title}
	</h1>
	<slot/>
</div>
