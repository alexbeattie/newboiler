import { NextResponse } from 'next/server'
export async function POST(request) {
  //   return NextResponse.json({ data: "working fine" })
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const myfile = formData.get('message')
  console.log(message);
  return NextResponse.json({ name, email, message })
}