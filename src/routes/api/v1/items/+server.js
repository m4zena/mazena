import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const { description } = await request.json();
  console.log(description);
  return json({ message: 'Item created' }, { status: 201 });
}
