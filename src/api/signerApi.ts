import { SignerPost } from '../types';
import { axiosHelper } from "../helper";

const endpoint = "/signers";

const signerApi = {
  createSigners: (payload: SignerPost) => axiosHelper().post(endpoint, payload),
  getSigners: () => axiosHelper().get(endpoint),
};

export default signerApi;
