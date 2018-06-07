export interface IUser {
  id?: number;
  provider?: string;
  uid: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  billingProfile?: IBillingProfile;
}

export interface IBillingProfile {
  email: string;
  personName: string;
  companyName?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  accountOwner?: string;
  iban?: string;
  swiftCode?: string;
  currency?: string;
}
