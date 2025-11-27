import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    WEATHER_API_KEY: process.env.WEATHER_API_KEY || null,
  });
}
