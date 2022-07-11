import axios, { AxiosResponse } from 'axios';
import { Option } from '../components/models';

const baseURL = process.env.REACT_APP_API_URL;

export const getOptions = (): Promise<AxiosResponse<Option[]>> => axios.get(`${baseURL}options`);
