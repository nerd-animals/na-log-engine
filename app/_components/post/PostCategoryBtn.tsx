import PostManager from 'lib/PostManager';

export default function PostCategoryBtn() {
  const allPosts = PostManager.getInstance().getAllPost();
  const categories = Array.from(
    new Set(allPosts.map((post) => post.frontMatter.slug.slice(0, -1)))
  );
  return (
    <div className="post-category-btn-wrapper">
      {categories.map((category) => (
        <button type="button" className="post-category-btn">
          {category}
        </button>
      ))}
    </div>
  );
}
