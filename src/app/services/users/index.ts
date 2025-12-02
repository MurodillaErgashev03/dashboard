import { IBaseDataRes } from '../../type';
import { api } from '../api';
import { IOrder, IOrderRes, IProduct } from './type';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get products endpoint
    getProducts: build.mutation<IBaseDataRes<IProduct>, void>({
      query: () => ({ url: `/products` }),
    }),
    //Validation endpoint
    sendOrders: build.mutation<IOrderRes, IOrder>({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProductsMutation, useSendOrdersMutation } = authApi;
