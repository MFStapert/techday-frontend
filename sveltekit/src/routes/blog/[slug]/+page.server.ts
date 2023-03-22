import { getPost, type Post } from '$lib/server/db';
import type { PageServerLoad } from '../$types';

export const load = (async ({ params }) => {	
	let post = await getPost(params.slug)
	const postContentPromise = await fetch('https://dummyjson.com/posts/1');
	const postContent = await postContentPromise.json();
	post = {
		...post,
		content: postContent.body
	} as Post;
	return {
		post: post
	  };
	
}) satisfies PageServerLoad;

