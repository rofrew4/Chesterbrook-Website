import { ImageResponse } from "next/og";

export const alt = "Chesterbrook";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#F6F2EB",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            fontFamily: "Georgia, serif",
            color: "#1a1a1a",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Chesterbrook
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "#7B1E3A",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Intelligence systems for the operators of physical assets.
        </div>
      </div>
    ),
    { ...size }
  );
}
