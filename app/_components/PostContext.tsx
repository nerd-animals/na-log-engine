import { PostWithoutSlug } from 'lib/PostManager';
import {
  useState,
  createContext,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

const defaultPost: PostWithoutSlug = {
  frontMatter: {
    title: '',
    summary: '',
    author: '',
    tags: [],
    date: new Date(),
  },
  content: '',
};

export const PostContext = createContext<{
  post: PostWithoutSlug;
  setPost: Dispatch<SetStateAction<PostWithoutSlug>>;
  updateTags: (newTags: string[]) => void;
}>({
  post: defaultPost,
  setPost: () => {},
  updateTags: () => {},
});

function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost]: [
    PostWithoutSlug,
    Dispatch<SetStateAction<PostWithoutSlug>>,
  ] = useState<PostWithoutSlug>(defaultPost);

  const updateTags = (newTags: string[]) => {
    setPost((prevPost: PostWithoutSlug) => ({
      ...prevPost,
      frontMatter: {
        ...prevPost.frontMatter,
        tags: newTags,
      },
    }));
  };

  const value = useMemo(
    () => ({
      post,
      setPost,
      updateTags,
    }),
    [post, setPost]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

const { Consumer: PostConsumer } = PostContext;

export { PostProvider, PostConsumer };

export default PostContext;
