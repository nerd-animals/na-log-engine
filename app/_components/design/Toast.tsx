export default function Toast({
  toast,
  message,
}: {
  toast: boolean;
  message: string;
}) {
  return <div className={`toast${toast ? '-active' : ''}`}>{message}</div>;
}
