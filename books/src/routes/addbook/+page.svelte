<script lang="ts">
    import Newbook from "$lib/newbook.svelte";
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
</script>

<div class="container my-3">
    <h3>
      Add Book To Your Collection
    </h3>
</div>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
    <div class="container my-3">
        <p>Book Added Successfully!</p>
    </div>
{/if}

<div class="container my-3">
    <Newbook></Newbook>
</div>