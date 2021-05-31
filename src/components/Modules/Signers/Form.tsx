const Form = () => {
  return (
    <>
      <div className="flex justify-between">
        <label className="text-gray-600 w-1/3">NPWP</label>
        <input name="npwp" placeholder="NPWP" className="p-5 bg-white border border-gray-200 rounded shadow-sm h-6 w-full"/>
      </div>
      <div className="flex justify-between mt-5">
        <label className="text-gray-600 w-1/3">Nama Penandatanganan SPT</label>
        <input name="name" placeholder="Nama Penandatanganan SPT" className="p-5 bg-white border border-gray-200 rounded shadow-sm h-6 w-full"/>
      </div>
      <div className="flex mt-5">
        <label className="text-gray-600 w-1/3">Bertindak Sebagai</label>
        <input type="radio" name="npwp" className=""/> Wajib Pajak
        <input type="radio" name="npwp" className=""/>Kuasa
      </div>
      <div className="flex mt-5">
        <label className="text-gray-600 w-1/3">Status Wajib Pajak</label>
        <input type="radio" name="npwp" className=""/> Aktif
        <input type="radio" name="npwp" className=""/>Tidak Aktif
      </div>
      <div className="flex mt-5">
        <input type="checkbox" name="npwp" className=""/> Jadikan Sebagai Default
      </div>
    </>
  )
}

export default Form;
