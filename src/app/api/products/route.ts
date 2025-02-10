import { products } from "@/data/product-data";

export async function GET() {
    return new Response(JSON.stringify(products), {
        status:200, 
        headers: {
            'Content-Type': 'application/json'
        }
    })
}