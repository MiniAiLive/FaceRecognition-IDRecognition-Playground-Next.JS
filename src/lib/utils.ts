import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const ID_LIVE_API_BASE_URL = process.env.NEXT_PUBLIC_ID_LIVE_API_URL;
export const ID_RECOG_API_BASE_URL = process.env.NEXT_PUBLIC_ID_RECOG_API_URL;
export const FACE_LIVE_API_BASE_URL = process.env.NEXT_PUBLIC_FACE_LIVE_API_URL;
export const FACE_RECOG_API_BASE_URL =
  process.env.NEXT_PUBLIC_FACE_RECOG_API_URL;
export const PLAYGROUND_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DATABASE_NAME = "faceAppDb";
export const STORE_NAME = "kycSelfieData";

export const storageKeys = {
  formData: "kycFormData",
  licenseData: "kycLicenseData",
  faceMatchingData: "kycFaceMatchingData",
  passportData: "kycPassportData",
  livenessData: "kycSelfieData",
};
