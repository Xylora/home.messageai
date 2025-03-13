export default function ProximaTable() {
  return (
   <div className="overflow-x-auto p-6 bg-gradient-to-br from-gray-100 to-blue-50 rounded-lg shadow-lg flex justify-center">
  <div className="w-full max-w-4xl">
    <h1 className="text-4xl font-extrabold text-center text-blue-700">AI Model Comparison</h1>
    <p className="text-center text-gray-600 my-4 text-lg">
      Compare the top AI models based on their capabilities and pricing.
    </p>

    {/* Centered Table */}
    <table className="w-full mx-auto bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden text-center">
      <thead>
        <tr className="bg-blue-100 text-blue-900">
          <th className="border px-6 py-3">AI Model</th>
          <th className="border px-6 py-3">Capabilities</th>
          <th className="border px-6 py-3">Pricing</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="hover:bg-blue-50 transition-colors">
          <td className="border px-6 py-3 font-bold">DeepSeek-V3</td>
          <td className="border px-6 py-3">High-speed inference, state-of-the-art performance</td>
          <td className="border px-6 py-3">$49/month</td>
        </tr>
        <tr className="hover:bg-blue-50 transition-colors">
          <td className="border px-6 py-3 font-bold">GPT-4o</td>
          <td className="border px-6 py-3">Multi-modal capabilities, best-in-class reasoning</td>
          <td className="border px-6 py-3">$20/month</td>
        </tr>
        <tr className="hover:bg-blue-50 transition-colors">
          <td className="border px-6 py-3 font-bold">Claude-3.5</td>
          <td className="border px-6 py-3">Optimized for complex problem solving</td>
          <td className="border px-6 py-3">$30/month</td>
        </tr>
        <tr className="hover:bg-blue-50 transition-colors">
          <td className="border px-6 py-3 font-bold">Llama3.1</td>
          <td className="border px-6 py-3">High efficiency for enterprise solutions</td>
          <td className="border px-6 py-3">$15/month</td>
        </tr>
        <tr className="hover:bg-blue-50 transition-colors">
          <td className="border px-6 py-3 font-bold">Qwen2.5</td>
          <td className="border px-6 py-3">Enhanced NLP with strong contextual understanding</td>
          <td className="border px-6 py-3">$25/month</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
}
