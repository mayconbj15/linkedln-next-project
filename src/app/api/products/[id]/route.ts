import { NextRequest } from "next/server"
import { connectToDb } from "@/app/api/db";

type Params = {
    id: string
}

export async function GET(request: NextRequest, { params }: {params: Params}) {
    const { db } = await connectToDb()
    const productId = params.id
    
    const product = await db.collection('products').findOne({id: productId})

    if(!product){
        return new Response(null, {status: 204})
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}