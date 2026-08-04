import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Eileen — Visual Designer", description: "Portfolio of Yin Yinglin, a visual communication designer working across brand, cultural creative, graphic and UI design.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }, openGraph: { title: "Eileen — Visual Designer", description: "Quiet stories, modern visuals, and cultural imagination.", images: ["/og.png"] }, twitter: { card: "summary_large_image", title: "Eileen — Visual Designer", description: "Quiet stories, modern visuals, and cultural imagination.", images: ["/og.png"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
