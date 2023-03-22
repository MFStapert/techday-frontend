<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<p>{data.post.content}</p>

<style>
	h1 {
		width: 100%;
		margin-bottom: 32px;
	}
</style>
