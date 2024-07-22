export default function PostMoreButton({ morePost }: { morePost: () => void }) {
  return (
    <button type="button" className="post-more-button" onClick={morePost}>
      more
    </button>
  );
}
