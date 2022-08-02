import axios from 'axios';

export const parseNetworkError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return {data: error?.response?.data, status: error?.response?.status};
  }
  return error;
};
