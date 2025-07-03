export interface PersonalDetailsFormProps {
  formData: {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    medicalInsurance: string;
    email: string;
    cell: string;
    membershipType: string; 
    membershipPrice: number;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
