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
  updateSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateTags: (newTags: string[]) => void;
}>({
  post: defaultPost,
  setPost: () => {},
  updateSummary: () => {},
  updateTags: () => {},
});

function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost]: [Post, Dispatch<SetStateAction<Post>>] =
    useState<Post>(defaultPost);

  const updateSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevPost: Post) => ({
      ...prevPost,
      frontMatter: {
        ...prevPost.frontMatter,
        summary: e.target.value,
      },
    }));
  };

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
      updateSummary,
      updateTags,
    }),
    [post, setPost]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

const { Consumer: PostConsumer } = PostContext;

export { PostProvider, PostConsumer };

export default PostContext;
