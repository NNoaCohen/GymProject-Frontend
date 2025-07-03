// models/Gymnast.ts

export interface Gymnast {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string; // שמרי כתאריך בפורמט ISO (Date.toISOString())
  medicalInsurance?: string;
  level?: string;
  membershipType?: string;
  paymentType?: string;
  email: string;
  cell: string;
  weeklyCounter?: number;
  entryDate?: string; // גם כאן Date כ־string
}
