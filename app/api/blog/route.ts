import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid"; // For generating unique IDs

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const tags = formData.get("tags") as string;
  const thumbnail = formData.get("thumbnail") as File | null;
  const images = formData.getAll("images[]") as File[];

  const blogsPath = path.join(process.cwd(), "blogs.json");
  const uploadsPath = path.join(process.cwd(), "public/uploads");

  try {
    // Ensure uploads directory exists
    await fs.mkdir(uploadsPath, { recursive: true });

    // Save thumbnail
    let thumbnailPath = "";
    if (thumbnail) {
      thumbnailPath = `/uploads/${Date.now()}_${thumbnail.name}`;
      await fs.writeFile(path.join(uploadsPath, thumbnailPath), Buffer.from(await thumbnail.arrayBuffer()));
    }

    // Save images
    const imagePaths: string[] = [];
    for (const image of images) {
      const imagePath = `/uploads/${Date.now()}_${image.name}`;
      imagePaths.push(imagePath);
      await fs.writeFile(path.join(uploadsPath, imagePath), Buffer.from(await image.arrayBuffer()));
    }

    // Read existing blogs
    const blogs = JSON.parse(await fs.readFile(blogsPath, "utf8") || "[]");

    // Add new blog
    blogs.push({
      id: nanoid(), // Assign unique ID
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      thumbnail: thumbnailPath,
      images: imagePaths,
      date: new Date().toISOString(),
    });

    // Save blogs
    await fs.writeFile(blogsPath, JSON.stringify(blogs, null, 2));

    return NextResponse.json({ message: "Blog added successfully" }, { status: 201 });
  } catch (error) {
    console.error("Failed to save blog:", error);
    return NextResponse.json({ error: "Failed to save blog" }, { status: 500 });
  }
}
