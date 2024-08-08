export default function PostMoreButton({ morePost }: { morePost: () => void }) {
  return (
    <button type="button" className="post-card-more-button" onClick={morePost}>
      MORE
    </button>
  );
}
