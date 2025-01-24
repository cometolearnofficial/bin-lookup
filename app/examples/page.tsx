export default function Examples() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Example BIN Lookups</h1>
      <div className="space-y-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">BIN: 411111</h2>
          <div className="border p-4 rounded-lg shadow-sm">
            <p><strong>Card Brand:</strong> Visa</p>
            <p><strong>Card Type:</strong> Credit</p>
            <p><strong>Card Level:</strong> Classic</p>
            <p><strong>Issuing Bank:</strong> JPMorgan Chase Bank, N.A.</p>
            <p>
              <strong>Bank Website:</strong>{' '}
              <a href="https://www.chase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://www.chase.com
              </a>
            </p>
            <p><strong>Bank Phone:</strong> +1-800-935-9935</p>
            <p><strong>Country:</strong> United States <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="inline-block ml-2" /></p>
            <p><strong>Country Code:</strong> US</p>
            <p><strong>Currency:</strong> USD</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">BIN: 551111</h2>
          <div className="border p-4 rounded-lg shadow-sm">
            <p><strong>Card Brand:</strong> Mastercard</p>
            <p><strong>Card Type:</strong> Credit</p>
            <p><strong>Card Level:</strong> Gold</p>
            <p><strong>Issuing Bank:</strong> Bank of America, N.A.</p>
            <p>
              <strong>Bank Website:</strong>{' '}
              <a href="https://www.bankofamerica.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://www.bankofamerica.com
              </a>
            </p>
            <p><strong>Bank Phone:</strong> +1-800-732-9194</p>
            <p><strong>Country:</strong> United States <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="inline-block ml-2" /></p>
            <p><strong>Country Code:</strong> US</p>
            <p><strong>Currency:</strong> USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
