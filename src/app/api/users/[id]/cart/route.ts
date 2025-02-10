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

type CartBody = { productId: string }

export async function POST(request: NextRequest, { params }: {params: Params}) {
    const userId = params.id
    const body: CartBody = await request.json()
    const productId = body.productId
    console.log(productId)
    console.log(carts[userId])
    carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId]
    const cartProducts = carts[userId].map(id => products.find(p => p.id === id))

    return new Response(JSON.stringify(cartProducts),{
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}