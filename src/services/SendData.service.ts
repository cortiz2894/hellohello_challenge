import axios, { AxiosResponse } from 'axios';
import { MailResponse } from '../components/models';

const baseURL = process.env.REACT_APP_API_URL;

export const sendEmail = (email:string, option:string): Promise<AxiosResponse<MailResponse>> => axios.post(`${baseURL}send`, null, {
  params: {
    email,
    option,
  },
});
