export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">API Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-4xl font-bold mb-4">
            $29<span className="text-xl font-normal">/month</span>
          </p>
          <ul className="mb-6">
            <li className="mb-2">1,000 API calls/month</li>
            <li className="mb-2">Basic support</li>
            <li className="mb-2">99.9% uptime SLA</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Choose Plan</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-4xl font-bold mb-4">
            $99<span className="text-xl font-normal">/month</span>
          </p>
          <ul className="mb-6">
            <li className="mb-2">10,000 API calls/month</li>
            <li className="mb-2">Priority support</li>
            <li className="mb-2">99.99% uptime SLA</li>
            <li className="mb-2">Advanced analytics</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Choose Plan</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-4xl font-bold mb-4">Custom</p>
          <ul className="mb-6">
            <li className="mb-2">Unlimited API calls</li>
            <li className="mb-2">24/7 dedicated support</li>
            <li className="mb-2">99.999% uptime SLA</li>
            <li className="mb-2">Custom integration</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Contact Sales</button>
        </div>
      </div>
    </div>
  )
}

