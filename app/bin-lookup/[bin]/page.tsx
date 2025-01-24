import { notFound } from "next/navigation";
import BINResult from "@/components/BINResult";

async function getBINData(bin: string, ip: string) {
  try {
    // Construct the absolute URL
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const apiUrl = `${baseUrl}/api/bin-lookup`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bin, ip }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("Error fetching BIN data:", errorDetails);
      throw new Error("Failed to fetch BIN data");
    }

    const data = await response.json();
    console.log("Fetched BIN Data:", data);
    return data;
  } catch (error) {
    console.error("Error in getBINData:", error);
    throw new Error("Network error occurred while fetching BIN data.");
  }
}

export default async function BINLookup({ params }: { params: { bin: string } }) {
  const ip = "111.88.86.56"; // Example static IP for now
  if (!params.bin || params.bin.length < 6) {
    notFound();
  }

  try {
    const binData = await getBINData(params.bin, ip);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">We ❤️ You Guys </h1>
        <BINResult data={binData} />
      </div>
    );
  } catch (error) {
    console.error("Error in BINLookup:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">BIN Lookup Result</h1>
        <p className="text-red-600 text-center">An error occurred while fetching data. Please try again later.</p>
      </div>
    );
  }
}
