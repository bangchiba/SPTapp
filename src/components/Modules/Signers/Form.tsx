import { useForm } from "react-hook-form";
import { Signer } from '../../../types';
interface FormProps {
  onSubmit: (value: any) => void;
  toggle?: () => void;
}

const Form = (props: FormProps) => {
  const { onSubmit, toggle } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Signer>();
  console.log("error", errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className={"flex justify-between"}>
            <label className="text-gray-600 w-1/2">NPWP *</label>
            <input
              {...register("npwp", { required: true })}
              placeholder="NPWP"
              className="p-5 bg-white border border-gray-200 rounded shadow-sm h-6 w-full"
            />
          </div>
          {errors.npwp?.type === "required" && (
            <span className="text-red-600 text-sm italic">
              NPWP harus di isi
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between mt-5">
            <label className="text-gray-600 w-1/2">
              Nama Penandatanganan SPT *
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Nama Penandatanganan SPT"
              className="p-5 bg-white border border-gray-200 rounded shadow-sm h-6 w-full"
            />
          </div>
          {errors.name?.type === "required" && (
            <span className="text-red-600 text-sm italic">
              Nama harus di isi
            </span>
          )}
        </div>
        <div className="flex mt-5 items-center text-gray-600">
          <label className="text-gray-600 w-1/3 mr-5">Bertindak Sebagai *</label>
          <input
            {...register("signatory")}
            type="radio"
            value="TEXTPAYER"
            className="mr-2"
          />{" "}
          Wajib Pajak
          <input
            {...register("signatory")}
            type="radio"
            value="AUTHORIZED_REPRESENTATIVE"
            className="mr-2 ml-10"
          />
          Kuasa
        </div>
        <div className="flex mt-5 items-center text-gray-600">
          <label className="w-1/3 mr-5">Status Wajib Pajak *</label>
          <input
            {...register("statusTaxpayer")}
            type="radio"
            value="ACTIVE"
            className="mr-2"
          />{" "}
          Aktif
          <input
            {...register("statusTaxpayer")}
            type="radio"
            value="NOT_ACTIVE"
            className="mr-2 ml-10"
          />
          Tidak Aktif
        </div>
        <div className="flex mt-5 mb-10 items-center text-gray-600">
          <input type="checkbox" {...register("defaultSignatory")} className="text-red-600 mr-5" /> Jadikan
          Sebagai Default
        </div>
        <div className="flex flex-row items-center justify-end p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <button className="mr-5" onClick={toggle}>
            Batal
          </button>
          <input
            type="submit"
            className="px-4 py-2 text-white font-semibold bg-red-600 rounded"
            value="Simpan"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
