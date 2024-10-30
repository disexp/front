import { Gender } from "./user-profile.model";

export interface Person{
  id?: number;
  firstName?: string;
  lastName?:string;
  birthdate?:number;
  phone?:number;
  photo?: string;
  email?: string;
  password?:string;
  numberDni?:string;
  gender?:Gender;
  typeUser?:TypeUser;
}

export interface TypeUser{
  id?: number;
  name?: string;
}
