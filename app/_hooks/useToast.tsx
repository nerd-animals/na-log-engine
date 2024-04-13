import { useState } from 'react';

export default function useToast() {
  const [toast, setToast] = useState(false);

  const showToast = () => {
    setToast(true);
  };

  const hideToast = () => {
    setToast(false);
  };
  return { toast, showToast, hideToast };
}
