// Vercel Serverless Function.
// Runs on Vercel's servers only — AWS credentials never reach the browser.
// Deployed automatically by Vercel as: POST /api/get-upload-url

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/heic"]);
const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8 MB

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fileType, fileSize } = req.body ?? {};

    if (!fileType || !ALLOWED_TYPES.has(fileType)) {
      return res.status(400).json({ error: "Unsupported file type" });
    }
    if (typeof fileSize !== "number" || fileSize <= 0 || fileSize > MAX_FILE_BYTES) {
      return res.status(400).json({ error: "File too large (max 8MB)" });
    }

    const extension = fileType.split("/")[1];
    const key = `enquiry-photos/${new Date().toISOString().slice(0, 10)}/${randomUUID()}.${extension}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME as string,
      Key: key,
      ContentType: fileType,
      ContentLength: fileSize,
    });

    // Presigned URL is valid for 60 seconds — just long enough for the browser to PUT the file.
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

    const publicUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return res.status(200).json({ uploadUrl, publicUrl });
  } catch (err) {
    console.error("Presign error:", err);
    return res.status(500).json({ error: "Could not create upload URL" });
  }
}
