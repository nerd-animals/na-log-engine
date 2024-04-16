export default function Toast({
  toast,
  message,
}: {
  toast: boolean;
  message: string;
}) {
  return toast && <div className="toast">{message}</div>;
}
