import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ alive: true }, {status: 200})
}
