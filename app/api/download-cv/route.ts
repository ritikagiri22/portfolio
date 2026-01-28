import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode"); // "download" or "preview"

    const filename = "Resume of Ritika Giri.pdf";
    const filePath = path.join(process.cwd(), "public/resume", filename);

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({
            error: "CV not found. Expected at public/resume/Resume of Ritika Giri.pdf"
        }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const contentDisposition = mode === "download"
        ? `attachment; filename="Ritika_Giri_CV.pdf"`
        : "inline";

    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": contentDisposition,
        },
    });
}
