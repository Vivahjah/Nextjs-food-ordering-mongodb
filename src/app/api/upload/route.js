

export async function POST(req) {
    const data = await req.formData();
    if (data) console.log(data)

    return Response.json(true)
}