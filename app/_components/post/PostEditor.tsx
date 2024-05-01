import { useContext } from 'react';
import { PostContext } from '@/_context/PostContext';
import WriteNav from '@/_components/layout/WriteNav';
import Toast from '@/_components/design/Toast';
import useEditInputTag from '@/_hooks/useEditInputTag';
import useEditPost from '@/_hooks/useEditPost';
import useToast from '@/_hooks/useToast';

export default function PostEditor() {
  const { post } = useContext(PostContext);

  const handleChangeInputPost = useEditPost();
  const {
    inputTag,
    handleChangeInputTag,
    handlePasteInputTag,
    handleKeyDownInputTag,
  } = useEditInputTag();
  const { toast, showToast, hideToast } = useToast();

  const formattedDate: string = post.frontMatter.date
    .toISOString()
    .substring(0, 10);

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
              onKeyDown={handleKeyDownInputTag}
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
