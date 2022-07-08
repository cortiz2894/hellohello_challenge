import axios, { AxiosResponse } from 'axios';
import { Params, MailResponse } from '../components/models';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   timeout: 15000,
// });

// const emailRequests = {
//   post: (url: string, body:null, params:Params) => instance.post<Params>(url, null, params).then((response: AxiosResponse) => response.data),
// };

// export const Email = {
//   sendEmail: (email:string, option:string) : Promise<MailResponse> => emailRequests.post('/send', null, {
//     params: {
//       email,
//       option,
//     },
//   }),
// };

const baseURL = process.env.REACT_APP_API_URL;

export const sendEmail = (email:string, option:string): Promise<AxiosResponse<MailResponse>> => axios.post(`${baseURL}send`, null, {
  params: {
    email,
    option,
  },
});
