import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { event, path } = body;

        // Mock analytics logging
        console.log(`Analytics Event: ${event} on ${path}`);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to log analytics" }, { status: 500 });
    }
}
