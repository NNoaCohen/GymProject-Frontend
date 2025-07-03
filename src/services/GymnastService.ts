import { Gymnast } from 'models/Gymnast';
import { api } from './api';

export const GymnastService = {
  getById: (id: string) =>
    api.get(`/Gymnast/GetGymnastById`, { params: { id } }).then(res => res.data),
    newGymnast: (gymnast: Gymnast) =>
    api.post('/Gymnast/NewGymnast', gymnast).then(res => res.data),
    AddMembershipType: (gymnastId: string, membershipType: string) =>
api.put(`/Gymnast/AddMembershipType?type=${membershipType}&id=${gymnastId}`),
};
