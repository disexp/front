export interface Cinephile{
  firstName: string;
  lastName: string;
  genre: {
        id: CharacterData,
        label: string
      },
  documentNumber: number;
  birthdate: string;
  phoneNumber: number;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  id: number;
  image: string
}
