import pkg from 'mongoose';
const { Schema, model, connect } = pkg;
const dbhost = import.meta.env.VITE_DB_HOST as string;

export interface Post {
	_id: string;
	title: string;
	date: string;
	content?: string;
}

const schema = new Schema<Post>({
	title: { type: String, required: true },
	date: { type: String, required: true },
});

const PostModel = model<Post>('Post', schema, 'Post');

export async function getPosts(): Promise<Post[]> {
	await connect(dbhost);
	const posts = JSON.parse(JSON.stringify(await PostModel.find()));
	return posts;
}

export async function getPost(id: string): Promise<Post|null> {
	await connect(dbhost);
	const post = JSON.parse(JSON.stringify(await PostModel.findById(id)));
	return await post;
}
