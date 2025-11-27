// src/routes/blog/+page.server.ts
export async function load() {
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  const posts = Object.entries(paths).map(([path, file]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.md', '');
    

    return {
      slug,
      ...file.metadata
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });


  return { posts: sortedPosts };
}