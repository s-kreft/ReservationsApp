import { db } from "@/app/data/credentials";

export async function DELETE(request: Request) {
  console.log("DELETE request received");
  const { id } = await request.json();

  console.log("Parsed request body:", id);

  const data = await db();
  const index = data.users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = data.users.splice(index, 1);
    return new Response(JSON.stringify(deletedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("User not found", { status: 404 });
}

export async function PUT(request: Request) {
  console.log("PUT request received");
  console.log("Request body:", request.body);
  const updatedUser = await request.json();
  console.log("Parsed request body:", updatedUser);

  const data = await db();
  const index = data.users.findIndex((user) => user.id === updatedUser.id);
  if (index !== -1) {
    data.users[index] = updatedUser;
    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response("User not found", { status: 404 });
  }
}
