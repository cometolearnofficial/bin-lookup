import { promises as fs } from "fs";
import path from "path";

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const blogsPath = path.join(process.cwd(), "blogs.json");
  const blogs = JSON.parse(await fs.readFile(blogsPath, "utf8") || "[]");
  const blog = blogs.find((b: any) => b.id === params.id);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">
        Published on {new Date(blog.date).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose" />
      {blog.images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-8">
          {blog.images.map((image: string, i: number) => (
            <img key={i} src={image} alt={`Image ${i}`} className="w-full h-32 object-cover rounded" />
          ))}
        </div>
      )}
    </div>
  );
}
