export async function POST(request: Request) {
  const body = await request.json();

  console.log("Contact message:", body);

  return Response.json(
    {
      message: "Contact request received",
    },
    {
      status: 201,
    }
  );
}