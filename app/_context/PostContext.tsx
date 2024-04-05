import { Post } from 'lib/PostManager';
import {
  useState,
  createContext,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

const defaultPost: Post = {
  frontMatter: {
    title: '',
    summary: '',
    author: '',
    tags: [],
    date: new Date(),
    slug: [],
  },
  content: '',
};

export const PostContext = createContext<{
  post: Post;
  setPost: Dispatch<SetStateAction<Post>>;
  updateTags: (newTags: string[]) => void;
}>({
  post: defaultPost,
  setPost: () => {},
  updateTags: () => {},
});

function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost]: [Post, Dispatch<SetStateAction<Post>>] =
    useState<Post>(defaultPost);

  const updateTags = (newTags: string[]) => {
    setPost((prevPost: Post) => ({
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
