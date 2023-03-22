<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1 class="page-title">Posts</h1>

{#each data.posts as post}
	<div class="blog-item">
		<!-- sveltekit:prefetch  -->
		<a href="/blog/{post._id}"> 
			<h1>{post.title}!</h1>
			<h3>{post.date}</h3>
		</a>
	</div>
{/each}

<style>
	.page-title {
		margin-bottom: 32px;
	}
</style>
