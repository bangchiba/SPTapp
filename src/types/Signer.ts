export interface Signer {
  id: string;
  name: string;
  npwp: string;
  statusTaxpayer: StatusTaxpayerType;
  signatory: SignatoryType;
  defaultSignatory: boolean;
}

type SignatoryType = 'TAXPAYER' | 'AUTHORIZED_REPRESENTATIVE';
type StatusTaxpayerType = 'ACTIVE' | 'NOT_ACTIVE';

type TypeSignatoryObject = {
  [key in SignatoryType]? : string;
} 

type StatusTaxpayerObject = {
  [key in StatusTaxpayerType]? : string;
}

export const Signatory: TypeSignatoryObject = {
  TAXPAYER: 'Wajib Pajak',
  AUTHORIZED_REPRESENTATIVE: 'Kuasa'
}

export const StatusTaxpayer: StatusTaxpayerObject = {
  ACTIVE: 'Aktif',
  NOT_ACTIVE: 'Tidak Aktif'
}