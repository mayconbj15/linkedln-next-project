export async function GET() {
    return new Response(JSON.stringify({message: 'Hello froma Next.js route handler!'}), {
        status: 200, 
        headers: {
            'Content-Type': 'application/json'
    }
    })
}

export async function POST() {
    return new Response('Response post', {
        status: 200
    })
}