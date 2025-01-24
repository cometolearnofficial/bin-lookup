"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [tags, setTags] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
    formData.append("tags", tags);

    const response = await fetch("/api/blog", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Blog posted successfully!");
      setTitle("");
      setContent("");
      setThumbnail(null);
      setImages([]);
      setTags("");
    } else {
      alert("Failed to post the blog.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin - Write a Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-lg font-semibold">Content</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="bg-white"
            theme="snow"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-lg font-semibold">Thumbnail</label>
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
        </div>

        {/* Images */}
        <div>
          <label className="block text-lg font-semibold">Upload Images</label>
          <input
            type="file"
            onChange={(e) =>
              setImages(Array.from(e.target.files || []))
            }
            className="w-full p-2 border rounded"
            multiple
            accept="image/*"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-lg font-semibold">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Publish
        </button>
      </form>
    </div>
  );
}
