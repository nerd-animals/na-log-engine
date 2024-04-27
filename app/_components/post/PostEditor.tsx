import { useContext, useState } from 'react';
import { PostContext } from '@/_context/PostContext';
import Toast from '@/_components/design/Toast';
import useToast from '@/_hooks/useToast';
import WriteNav from '@/_components/layout/WriteNav';
import useEditPost from '@/_hooks/useEditPost';

export default function PostEditor() {
  const { post, updateTags } = useContext(PostContext);
  const [inputTag, setInputTag] = useState('');
  const handleChangeInputPost = useEditPost();
  const { toast, showToast, hideToast } = useToast();
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
        <div className="info-wrapper">
          <div className="tags-wrapper">
            <input
              className="tags"
              type="text"
              placeholder="태그를 입력해주세요"
              value={inputTag}
              onChange={handleChangeInputTag}
              onPaste={handlePasteInputTag}
              onKeyDown={handleKeyDownValue}
              onFocus={showToast}
              onBlur={hideToast}
            />
          </div>
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
        <Toast
          toast={toast}
          message={`쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다.
            백스페이스를 입력하여 태그를 삭제할 수 있습니다.
          `}
        />
      </div>
      <div className="content-wrapper">
        <textarea
          className="content"
          value={post.content}
          placeholder="글 내용을 입력하세요"
          onChange={handleChangeInputPost}
        />
      </div>
      <WriteNav />
    </div>
  );
}
