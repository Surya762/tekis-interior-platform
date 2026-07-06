/**
 * Uploads a file directly to S3 using a short-lived presigned URL
 * obtained from our own /api/get-upload-url serverless function.
 * The browser never sees AWS credentials.
 */
export async function uploadToS3(file: File): Promise<string> {
  const presignRes = await fetch("/api/get-upload-url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fileType: file.type, fileSize: file.size }),
  });

  if (!presignRes.ok) {
    const { error } = await presignRes.json().catch(() => ({ error: "Upload setup failed" }));
    throw new Error(error || "Upload setup failed");
  }

  const { uploadUrl, publicUrl } = await presignRes.json();

  const putRes = await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });

  if (!putRes.ok) {
    throw new Error("Upload to S3 failed");
  }

  return publicUrl as string;
}
