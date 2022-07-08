import axios, { AxiosResponse } from 'axios';
import { Option } from '../components/models';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   timeout: 15000,
// });

// const optionRequests = {
//   get: (url: string) => instance.get<Option>(url).then((response: AxiosResponse) => response.data),
// };

// export const Options = {
//   getOptions: () : Promise<Option[]> => optionRequests.get('/options'),
// };

const baseURL = process.env.REACT_APP_API_URL;

export const getOptions = (): Promise<AxiosResponse<Option[]>> => axios.get(`${baseURL}options`);
