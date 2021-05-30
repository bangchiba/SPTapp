const SignerList = () => {
  return (
    <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
      <thead className="bg-gray-50">
        <tr className="text-gray-600 text-left">
          <th className="font-semibold text-sm px-6 py-4">NPWP</th>
          <th className="font-semibold text-sm px-6 py-4">Name</th>
          <th className="font-semibold text-sm px-6 py-4">Sebagai</th>
          <th className="font-semibold text-sm px-6 py-4">Status</th>
          <th className="font-semibold text-sm px-6 py-4">Default</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200"></tbody>
    </table>
  )
}

export default SignerList
