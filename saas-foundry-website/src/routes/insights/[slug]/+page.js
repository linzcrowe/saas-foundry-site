import { dev } from '$app/environment';

export const csr = dev;
export const prerender = false; // temp workaround, pre-render is failing. TODO fix

export async function load({ params, fetch }) {
  const { slug } = params;
  const response = await fetch(`/api/posts/${slug}`);
  const post = await response.json();
  return post;
}
