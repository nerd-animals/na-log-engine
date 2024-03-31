import { useContext, useState } from 'react';
import { PostWithoutSlug } from 'lib/PostManager';
import { PostContext } from '@/_context/PostContext';

export default function PostEditor() {
  const { post, setPost, updateTags } = useContext(PostContext);
  const [inputTag, setInputTag] = useState('');

  const addTag = () => {
    if (inputTag.trim() === '' || post.frontMatter.tags.includes(inputTag)) {
      setInputTag('');
    } else if (inputTag !== '')
      updateTags([...post.frontMatter.tags, inputTag.trim()]);
    setInputTag('');
  };

  const deleteTag = () => {
    if (inputTag === '') updateTags(post.frontMatter.tags.slice(0, -1));
  };

  const handleChangeInputTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(e.target.value);

    if (e.target.value.startsWith(',')) {
      setTimeout(() => setInputTag(''), 30);
    }
  };

  const handleChangeInputPost = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.className === 'content') {
      setPost((prevPost: PostWithoutSlug) => ({
        ...prevPost,
        content: e.target.value,
      }));
    } else {
      setPost((prevPost: PostWithoutSlug) => ({
        ...prevPost,
        frontMatter: {
          ...prevPost.frontMatter,
          [e.target.className]: e.target.value,
        },
      }));
    }
  };

  const handlePasteInputTag = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData('text');

    if (pastedData.includes(',')) {
      e.preventDefault();

      const tagsWithComma = pastedData
        .split(',')
        .filter((tag: any) => tag.trim() !== '');

      updateTags(
        Array.from(new Set([...post.frontMatter.tags, ...tagsWithComma]))
      );
    }
  };

  const handleKeyDownValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',') {
      setTimeout(() => addTag(), 30);
    } else if (e.key === 'Enter' && e.nativeEvent.isComposing === false)
      addTag();
    else if (e.key === 'Backspace') {
      deleteTag();
    }
  };

  return (
    <div className="write-editor">
      <div className="front-matter">
        <input
          className="title"
          type="text"
          value={post.frontMatter.title}
          placeholder="제목을 입력해주세요"
          onChange={handleChangeInputPost}
        />
        <input
          className="tags"
          type="text"
          placeholder="태그를 입력해주세요"
          value={inputTag}
          onChange={handleChangeInputTag}
          onPaste={handlePasteInputTag}
          onKeyDown={handleKeyDownValue}
        />
        <input
          className="author"
          type="text"
          placeholder="글쓴이를 입력해주세요"
          value={post.frontMatter.author}
          onChange={handleChangeInputPost}
        />
      </div>
      <textarea
        className="content"
        value={post.content}
        onChange={handleChangeInputPost}
      />
    </div>
  );
}
