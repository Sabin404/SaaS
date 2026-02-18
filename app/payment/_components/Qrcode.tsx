"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImageUp, X } from "lucide-react";
import Image from "next/image";

interface QrcodeProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export default function Qrcode({ value, onChange }: QrcodeProps) {
  const [preview, setPreview] = useState<string | null>(value || null);
  // const [fileName, setFileName] = useState<string | null>(null);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    if (onChange) onChange(null);
  };
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];

        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setPreview(result);
          if (onChange) onChange(result);
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
    },
    maxFiles: 1,
  });

  return (
    <div className="w-full max-w-md mx-auto mt-2">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-lg transition-all cursor-pointer ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-[#B6B6B6] bg-gray-50 hover:border-gray-400"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center py-6 px-4">
          {preview ? (
            <>
              <div className="relative">
                <Image
                  width={400}
                  height={400}
                  src={preview}
                  alt="QR Code Preview"
                  className="w-32 h-32 object-contain mb-3"
                />

                <button
                  onClick={handleRemove}
                  className="absolute -top-2 -right-4  bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center">{__filename}</p>

              <p className="mt-2 text-xs text-gray-500">
                Click or drag to replace
              </p>
            </>
          ) : (
            <>
              <ImageUp
                className="w-12 h-12 text-gray-400 mb-3"
                strokeWidth={1}
              />

              <p className="text-sm text-placeholder_brand mb-1">
                {isDragActive
                  ? "Drop your QR code here"
                  : "Drag & drop your QR code here"}
              </p>

              <p className="text-xs text-gray-500 text-center px-4">
                Supported formats: JPG, PNG, SVG · Recommended size: 600×600
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
