import { Injectable } from '@nestjs/common';
import { api } from '../../api/api';

@Injectable()
export class OrderItensClient {

    async getById(orderItemId: string) {
        try {
            const {data} = await api.get(`/order-itens/${orderItemId}`)
            return data
        } catch(e) {
            throw new Error(e)
        }
    }

    async getOrderItens(orderId: string) {
        try {
            console.log('[OrderItensClient] [getOrderItens] [orderId]')
            const {data} = await api.get(`/order-itens/?orderId=${orderId}`)
            console.log(data)
            return data
        } catch(e) {
            throw new Error(e)
        }
    }

}