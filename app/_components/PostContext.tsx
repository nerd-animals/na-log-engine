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
}>({
  post: defaultPost,
  setPost: () => {},
});

function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost]: [
    PostWithoutSlug,
    Dispatch<SetStateAction<PostWithoutSlug>>,
  ] = useState<PostWithoutSlug>(defaultPost);

  const value = useMemo(
    () => ({
      post,
      setPost,
    }),
    [post, setPost]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

const { Consumer: PostConsumer } = PostContext;

export { PostProvider, PostConsumer };

export default PostContext;
