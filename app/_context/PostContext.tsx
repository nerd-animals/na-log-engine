import { Post } from 'lib/PostManager';
import {
  useState,
  createContext,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import useModal from '@/_hooks/useModal';

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
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  updateSummary: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  updateTags: (newTags: string[]) => void;
}>({
  post: defaultPost,
  setPost: () => {},
  isOpenModal: false,
  openModal: () => {},
  closeModal: () => {},
  updateSummary: () => {},
  updateTags: () => {},
});

function PostProvider({ children }: { children: ReactNode }) {
  const [post, setPost]: [Post, Dispatch<SetStateAction<Post>>] =
    useState<Post>(defaultPost);

  const updateSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const { isOpenModal, openModal, closeModal } = useModal();

  const value = useMemo(
    () => ({
      post,
      setPost,
      isOpenModal,
      openModal,
      closeModal,
      updateSummary,
      updateTags,
    }),
    [post, setPost, isOpenModal, openModal, closeModal]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

const { Consumer: PostConsumer } = PostContext;

export { PostProvider, PostConsumer };

export default PostContext;
