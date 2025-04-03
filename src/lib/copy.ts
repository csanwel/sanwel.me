type Options = {
  onSuccess?: () => void;
  onFailed?: () => void;
};

export async function copyToClipboard(
  text: string,
  opts?: Options,
): Promise<void> {
  if (!navigator.clipboard) {
    console.error("Clipboard API not supported");
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const { onSuccess = () => {}, onFailed = () => {} } = opts ?? {};

  try {
    await navigator.clipboard.writeText(text);
    onSuccess();
  } catch (err) {
    console.error("Failed to copy text:", err);
    onFailed();
  }
}
