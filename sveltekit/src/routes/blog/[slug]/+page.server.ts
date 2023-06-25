import { getPost, type Post } from '$lib/server/db';
import type { PageServerLoad } from '../$types';

export const load = (async ({ params }) => {	
	let post = await getPost(params.slug)
	const postContentPromise = await fetch('https://dummyjson.com/posts/1');
	const postContent = await postContentPromise.json();
	return {
		post: {
			...post,
			content: postContent.body
		}
	};
	
}) satisfies PageServerLoad;

