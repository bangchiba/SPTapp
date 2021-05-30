import { axiosHelper } from '../helper'

const endpoint = '/signers';

const signerApi = {
  getSigners: () => axiosHelper().get(endpoint),
}

export default signerApi;
