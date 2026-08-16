import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#818cf8", fontWeight: 600 }}>
          {personalInfo.title}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 72, fontWeight: 700 }}>
          {personalInfo.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#a1a1aa" }}>
          {personalInfo.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
