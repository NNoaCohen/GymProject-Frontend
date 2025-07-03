import { AppDispatch } from '../store';
import { fetchStart, fetchSuccess, fetchFailure } from '../slices/gymnastSlice';
import { GymnastService } from '../../services/GymnastService';
import { Gymnast } from 'models/Gymnast';

export const fetchGymnastById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchStart());
  try {
    const data = await GymnastService.getById(id);
    dispatch(fetchSuccess(data));
    return data; // ← חשוב!
  } catch (error: any) {
    dispatch(fetchFailure(error.message));
    throw error;
  }
};

export const createNewGymnast = (gymnast: Gymnast) => async (dispatch: AppDispatch) => {
  dispatch(fetchStart());
  try {
    const data = await GymnastService.newGymnast(gymnast);
    dispatch(fetchSuccess(data));
    return data; // ← חשוב!
  } catch (error: any) {
    dispatch(fetchFailure(error.message));
    throw error;
  }
};

export const addMembershipType = (gymnastId: string, membershipType: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchStart());
  try {
    const data = await GymnastService.AddMembershipType(gymnastId, membershipType);
    dispatch(fetchSuccess(data));
    return data; // ← חשוב!
  } catch (error: any) {
    dispatch(fetchFailure(error.message));
    throw error;
  }
};
