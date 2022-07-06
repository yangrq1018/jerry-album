<script lang="ts">
	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';

	const code = $page.url.searchParams.get('code')!;
	// const scope = $page.url.searchParams.get('scope')!;
	onMount(() => {
		axios.post('/api/album', {code});
	});
</script>

<div>code = {code}</div>
