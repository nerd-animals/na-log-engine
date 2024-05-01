import { useContext } from 'react';
import { Post } from 'lib/PostManager';
import { PostContext } from '@/_context/PostContext';

export default function useEditPost() {
  const { setPost } = useContext(PostContext);

  const handleChangeInputPost = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost((prevPost: Post) => ({
      ...prevPost,
      frontMatter: {
        ...prevPost.frontMatter,
        [e.target.className]:
          e.target.className === 'date'
            ? new Date(e.target.value)
            : e.target.value,
      },
      content:
        e.target.className === 'content' ? e.target.value : prevPost.content,
    }));
  };

  return handleChangeInputPost;
}
