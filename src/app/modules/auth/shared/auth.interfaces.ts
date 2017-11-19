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
}
