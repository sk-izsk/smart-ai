import dotenv from "dotenv";

const isTestEnvironment = process.env.NODE_ENV === "test";

if (isTestEnvironment) {
  dotenv.config({
    path: ".env.test",
    quiet: true,
  });
}

dotenv.config({
  path: ".env",
  quiet: true,
});

export const ENV = {
  PORT: process.env.PORT,
  DATABASE_URL: isTestEnvironment
    ? (process.env.DATABASE_URL_TEST ?? process.env.DATABASE_URL)
    : process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  CLIPBOARD_API_KEY: process.env.CLIPBOARD_API_KEY,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
