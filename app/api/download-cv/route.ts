import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode"); // "download" or "preview"
    const type = searchParams.get("type"); // "cv" or "portfolio"

    let filename = "Resume of Ritika Giri.pdf";
    let downloadName = "Ritika_Giri_CV.pdf";

    if (type === "portfolio") {
        filename = "entireWork.pdf";
        downloadName = "Ritika_Giri_Visual_Portfolio.pdf";
    }

    const filePath = path.join(process.cwd(), "public/resume", filename);

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({
            error: `File not found: ${filename}`
        }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const contentDisposition = mode === "download"
        ? `attachment; filename="${downloadName}"`
        : "inline";

    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": contentDisposition,
        },
    });
}
