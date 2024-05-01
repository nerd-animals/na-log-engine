import { useState, useContext } from 'react';
import { PostContext } from '@/_context/PostContext';

export default function useEditInputTag(initialInput: string = '') {
  const [inputTag, setInputTag] = useState(initialInput);
  const { post, updateTags } = useContext(PostContext);

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

  const handleKeyDownInputTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',') {
      setTimeout(() => addTag(), 30);
    } else if (e.key === 'Enter' && e.nativeEvent.isComposing === false)
      addTag();
    else if (e.key === 'Backspace') {
      deleteTag();
    }
  };

  return {
    inputTag,
    handleChangeInputTag,
    handlePasteInputTag,
    handleKeyDownInputTag,
  };
}
