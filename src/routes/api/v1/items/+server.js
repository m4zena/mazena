import { json } from '@sveltejs/kit';
import { writeFile, mkdir, readdir, readFile } from 'fs/promises';
import { randomUUID } from 'crypto';

export async function POST({ request }) {
  const { name, domain, jsLink } = await request.json();

  const widgetId = randomUUID();
  const widgetData = {
    id: widgetId,
    name,
    domain,
    jsLink,
    createdAt: new Date().toISOString()
  };

  await mkdir('./widgets', { recursive: true });
  await writeFile(`./widgets/${widgetId}.json`, JSON.stringify(widgetData, null, 2));

  return json({ message: 'Widget created', id: widgetId }, { status: 201 });
}

export async function GET() {
  try {
    const files = await readdir('./widgets');
    const jsonFiles = files.filter(f => f.endsWith('.json'));

    const widgets = await Promise.all(
      jsonFiles.map(async (file) => {
        const content = await readFile(`./widgets/${file}`, 'utf-8');
        return JSON.parse(content);
      })
    );

    return json(widgets);
  } catch (error) {
    return json({ error: 'Failed to read widgets' }, { status: 500 });
  }
}
