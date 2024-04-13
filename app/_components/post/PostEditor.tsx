import { useContext, useState } from 'react';
import { Post } from 'lib/PostManager';
import { PostContext } from '@/_context/PostContext';

export default function PostEditor() {
  const { post, setPost, updateTags } = useContext(PostContext);
  const [inputTag, setInputTag] = useState('');
  const formattedDate: string = post.frontMatter.date
    .toISOString()
    .substring(0, 10);

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

  const handlePasteInputTag = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData('text');

    if (pastedData.includes(',')) {
      e.preventDefault();

      const tagsWithComma = pastedData
        .split(',')
        .filter((tag: string) => tag.trim() !== '');

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
          className="date"
          type="date"
          value={formattedDate}
          onChange={handleChangeInputPost}
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
