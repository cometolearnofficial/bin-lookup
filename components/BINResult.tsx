export default function BINResult({ data }: { data: any }) {
  console.log("BINResult Component Data:", data);

  if (!data || !data.BIN || !data.IP) {
    return <p className="text-red-600 text-center">No valid data available.</p>;
  }

  const { BIN, IP } = data;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">BIN Lookup Results</h1>

      {/* Card Details */}
      <div className="glassy-card">
        <h2 className="text-xl font-semibold mb-4">Card Details</h2>
        <p><strong>Valid:</strong> {BIN.valid ? "True" : "False"}</p>
        <p><strong>Number:</strong> {BIN.number || "N/A"}</p>
        <p><strong>Length:</strong> {BIN.length || "N/A"}</p>
        <p><strong>Scheme:</strong> {BIN.scheme || "N/A"}</p>
        <p><strong>Brand:</strong> {BIN.brand || "N/A"}</p>
        <p><strong>Type:</strong> {BIN.type || "N/A"}</p>
        <p><strong>Level:</strong> {BIN.level || "N/A"}</p>
        <p><strong>Is Commercial:</strong> {BIN.is_commercial || "N/A"}</p>
        <p><strong>Is Prepaid:</strong> {BIN.is_prepaid || "N/A"}</p>
        <p><strong>Currency:</strong> {BIN.currency || "N/A"}</p>
      </div>

      {/* Issuer Information */}
      <div className="glassy-card">
        <h2 className="text-xl font-semibold mb-4">Issuer Information</h2>
        <p><strong>Name:</strong> {BIN.issuer?.name || "N/A"}</p>
        <p>
          <strong>Website:</strong>{" "}
          {BIN.issuer?.website ? (
            <a href={BIN.issuer.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {BIN.issuer.website}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p><strong>Phone:</strong> {BIN.issuer?.phone || "N/A"}</p>
      </div>

      {/* Country Details */}
      <div className="glassy-card">
        <h2 className="text-xl font-semibold mb-4">Country Details</h2>
        <p><strong>Name:</strong> {BIN.country?.name || "N/A"}</p>
        <p><strong>Native:</strong> {BIN.country?.native || "N/A"}</p>
        <p><strong>Flag:</strong> {BIN.country?.flag || "N/A"}</p>
        <p><strong>Numeric:</strong> {BIN.country?.numeric || "N/A"}</p>
        <p><strong>Capital:</strong> {BIN.country?.capital || "N/A"}</p>
        <p><strong>Currency:</strong> {BIN.country?.currency_name || "N/A"} ({BIN.country?.currency_symbol || "N/A"})</p>
        <p><strong>Region:</strong> {BIN.country?.region || "N/A"}</p>
        <p><strong>Sub-region:</strong> {BIN.country?.subregion || "N/A"}</p>
        <p><strong>IDD:</strong> {BIN.country?.idd || "N/A"}</p>
        <p><strong>Alpha-2 Code:</strong> {BIN.country?.alpha2 || "N/A"}</p>
        <p><strong>Alpha-3 Code:</strong> {BIN.country?.alpha3 || "N/A"}</p>
        <p><strong>Language:</strong> {BIN.country?.language || "N/A"} ({BIN.country?.language_code || "N/A"})</p>
      </div>

      {/* IP Information */}
      <div className="glassy-card">
        <h2 className="text-xl font-semibold mb-4">IP Information</h2>
        <p><strong>IP Address:</strong> {IP.IP || "N/A"}</p>
        <p><strong>Country:</strong> {IP.country || "N/A"} {IP.flag || ""}</p>
        <p><strong>Region:</strong> {IP.region || "N/A"}</p>
        <p><strong>City:</strong> {IP.city || "N/A"}</p>
        <p><strong>Latitude:</strong> {IP.latitude || "N/A"}</p>
        <p><strong>Longitude:</strong> {IP.longitude || "N/A"}</p>
        <p><strong>ISP:</strong> {IP.isp || "N/A"}</p>
        <p><strong>Proxy:</strong> {IP.is_proxy ? "True" : "False"}</p>
      </div>
    </div>
  );
}
