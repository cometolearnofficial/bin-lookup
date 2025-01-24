import { NextResponse } from "next/server";

// API Key for RapidAPI
const API_KEY = process.env.RAPIDAPI_KEY || "31b68767f8mshcc99e323952916cp1105cdjsnb7141f798ff0";

// Handle POST request
export async function POST(request: Request) {
  try {
    const { bin, ip } = await request.json(); // Extract bin and ip from the body

    // Validate input
    if (!bin || !ip || bin.length < 6 || !/^\d+$/.test(bin)) {
      console.error("Invalid BIN or IP:", { bin, ip });
      return NextResponse.json({ error: "Invalid BIN or IP" }, { status: 400 });
    }

    const options = {
      method: "POST",
      headers: {
        "X-Rapidapi-Key": API_KEY,
        "X-Rapidapi-Host": "bin-ip-checker.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bin, ip }), // Send both bin and ip
    };

    console.log("Making API request with options:", options);

    // Make the API request to the external service
    const response = await fetch(
      `https://bin-ip-checker.p.rapidapi.com/?bin=${bin}&ip=${ip}`,
      options
    );

    // Parse the response
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`API request failed: ${response.status} - ${errorDetails}`);
      return NextResponse.json(
        { error: "Failed to fetch BIN data from external API", details: errorDetails },
        { status: response.status }
      );
    }

    // Return the data from the API
    const data = await response.json();
    console.log("API Response Data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error fetching BIN data:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while fetching BIN data" },
      { status: 500 }
    );
  }
}
