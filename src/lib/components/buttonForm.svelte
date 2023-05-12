<script lang="ts">
    export let loading: boolean
    export let classes: string | null = null
</script>

<button disabled={loading} class={classes}>
    {#if !(loading)}
        <slot/>
    {:else}
        <div class="w-6 h-6 m-4 border-4 rounded-full animate-spin border-t-orange-800 border-r-orange-800 border-b-orange-400 border-l-orange-400">
        </div>
    {/if}
</button>