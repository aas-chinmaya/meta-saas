import apiHelper from '@/lib/apiHelper';

export async function GET(req) {
  try {
    const data = await apiHelper('GET', '/message');
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error?.status || 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await apiHelper('POST', '/message', body);
    return Response.json(data, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error?.status || 500 });
  }
}
