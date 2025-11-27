// src/routes/blog/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {

    const post = await import(`../../../posts/${params.slug}.md`);

    return {
      content: post.default, 
      meta: post.metadata 
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw error(404, `Post nie znaleziony`);
  }
}