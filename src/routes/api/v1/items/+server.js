import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const { name, domain, jsLink } = await request.json();

  console.log(name, domain, jsLink);

  return json({ message: 'Item created' }, { status: 201 });
}
