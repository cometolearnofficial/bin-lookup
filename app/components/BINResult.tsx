"use client";

export default function BINResult({ data }: { data: any }) {
  console.log("BINResult Component Data:", data);

  if (!data || !data.BIN || !data.IP) {
    return <p className="text-red-600 text-center">No valid data available.</p>;
  }

  const { BIN, IP } = data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">BIN Lookup Results</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card Details */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front glassy-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Card Details</h2>
              <p className="text-gray-600">
                <strong>Valid:</strong> {BIN.valid ? "True" : "False"}
              </p>
              <p className="text-gray-600">
                <strong>Number:</strong> {BIN.number || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Length:</strong> {BIN.length || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Scheme:</strong> {BIN.scheme || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Brand:</strong> {BIN.brand || "N/A"}
              </p>
            </div>
            <div className="flip-card-back glassy-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">More Card Details</h2>
              <p className="text-gray-600">
                <strong>Type:</strong> {BIN.type || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Level:</strong> {BIN.level || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Is Commercial:</strong> {BIN.is_commercial || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Is Prepaid:</strong> {BIN.is_prepaid || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Currency:</strong> {BIN.currency || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Issuer Information */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front glassy-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Issuer Information</h2>
              <p className="text-gray-600">
                <strong>Name:</strong> {BIN.issuer?.name || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{" "}
                {BIN.issuer?.website ? (
                  <a
                    href={BIN.issuer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {BIN.issuer.website}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {BIN.issuer?.phone || "N/A"}
              </p>
            </div>
            <div className="flip-card-back glassy-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">More Issuer Info</h2>
              <p className="text-gray-600">
                <strong>Phone:</strong> {BIN.issuer?.phone || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{" "}
                {BIN.issuer?.website ? (
                  <a
                    href={BIN.issuer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {BIN.issuer.website}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Country Details */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front glassy-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Country Details</h2>
              <p className="text-gray-600">
                <strong>Name:</strong> {BIN.country?.name || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Native:</strong> {BIN.country?.native || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Flag:</strong> {BIN.country?.flag || "N/A"}
              </p>
            </div>
            <div className="flip-card-back glassy-card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">More Country Info</h2>
              <p className="text-gray-600">
                <strong>Capital:</strong> {BIN.country?.capital || "N/A"}
              </p>
              <p className="text-gray-600">
                <strong>Currency:</strong> {BIN.country?.currency_name || "N/A"} (
                {BIN.country?.currency_symbol || "N/A"})
              </p>
              <p className="text-gray-600">
                <strong>Region:</strong> {BIN.country?.region || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
