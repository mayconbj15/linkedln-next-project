export async function GET() {
    return new Response('Hello froma Next.js route handler!', {
        status: 200
    })
}

export async function POST() {
    return new Response('Response post', {
        status: 200
    })
}