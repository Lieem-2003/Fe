import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    const WEATHER_KEY = process.env.WEATHER_API_KEY!;

    // 1. WEATHER
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb726f51cc737c802c3f2a46f360b420&units=metric&lang=vi`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    // 2. NOMINATIM GEOCODE (no key)
    const geoUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=vi&zoom=18&addressdetails=1`;
    const geoRes = await fetch(geoUrl, {
      headers: {
        "User-Agent": "SenTrip-App/1.0"
      }
    });
    const geoData = await geoRes.json();

    const addr = geoData?.address || {};

    return NextResponse.json({
      temp: weatherData.main?.temp ?? null,
      condition: weatherData.weather?.[0]?.main ?? "",
      iconCode: weatherData.weather?.[0]?.icon ?? "",

      ward: addr.suburb || addr.neighbourhood || null,
      district: addr.city_district || addr.county || null,
      city: addr.city || addr.town || addr.state || null,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
