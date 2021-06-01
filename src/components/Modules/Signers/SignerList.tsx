import { useEffect, useState } from "react";
import { signerApi } from "../../../api";
import { Signer, Signatory, StatusTaxpayer, SignerPost } from "../../../types";
import { Modal } from "../../Uikit";
import { npwpFormat } from "../../../helper";
import Form from "./Form";

const SignerList = () => {
  const [signerList, setSignerList] = useState<Array<Signer>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getSigners = async () => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await signerApi.getSigners();
      setSignerList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickEdit = (data: any) => {
    console.log('data', data)
    setIsModalOpen(true);
  };

  const handleOnSubmit = async(data: Signer) => {
    const payload: SignerPost = { data };
    try {
      const result = await signerApi.createSigners(payload);
      console.log('result', result);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getSigners();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Modal isShown={isModalOpen} title="Tambah Penandatangan SPT">
        <Form onSubmit={handleOnSubmit} toggle={() => setIsModalOpen(false)} />
      </Modal>
      <div>
        <div className="flex flex-row justify-between mb-3">
          <p>Tambah dan edit daftar Penandatanganan SPT anda</p>
          <button
            onClick={() => onClickEdit("0")}
            className="px-4 py-2 text-white bg-red-600 rounded"
          >
            + Tambah
          </button>
        </div>
        <table className="mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="text-gray-600 text-left">
              <th className="font-semibold text-sm px-6 py-4">NPWP</th>
              <th className="font-semibold text-sm px-6 py-4">Name</th>
              <th className="font-semibold text-sm px-6 py-4">Sebagai</th>
              <th className="font-semibold text-sm px-6 py-4">Status</th>
              <th className="font-semibold text-sm px-6 py-4">Default</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {signerList.map((each: Signer) => (
              <tr key={each.id}>
                <td className="px-4 py-3">{npwpFormat(each.npwp)}</td>
                <td>{each.name}</td>
                <td>{Signatory[each.signatory]}</td>
                <td>{StatusTaxpayer[each.statusTaxpayer]}</td>
                <td>{each.defaultSignatory ? "Ya" : "Tidak"}</td>
                <td>
                  <a
                    className="text-red-600"
                    href="#"
                    onClick={() => onClickEdit(each)}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SignerList;
