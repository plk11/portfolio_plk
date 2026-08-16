"use client";

import { ConfigProvider, FloatButton } from "antd";
import { useTheme } from "@/hooks/useTheme";

const ACCENT: Record<"light" | "dark", string> = {
  light: "#4f46e5",
  dark: "#818cf8",
};

export function BackToTop() {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={{ token: { colorPrimary: ACCENT[theme] } }}>
      <FloatButton.BackTop
        type="primary"
        tooltip="Back to top"
        visibilityHeight={400}
      />
    </ConfigProvider>
  );
}
