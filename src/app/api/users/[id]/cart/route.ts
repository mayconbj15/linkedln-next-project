import { NextRequest } from "next/server"
import { products } from "@/data/product-data";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
    '1': ['123', '234'],
    '2': ['345', '456'],
    '3': ['234',],
}
type Params = {
    id: string
}

export async function GET(request: NextRequest, { params }: {params: Params}) {
    const userId = params.id
    const productIds = carts[userId]
    
    if(!productIds){
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const cartProducts = productIds.map(id => products.find(p => p.id === id))
    
    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}