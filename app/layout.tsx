import type { Metadata } from "next";
import "./globals.css";
import "./interactive.css";
export const metadata:Metadata={title:"Eileen — UI/UX & Visual Designer",description:"Portfolio of Yin Yinglin — UI/UX, brand, graphic and cultural creative design.",icons:{icon:"/favicon.svg"},openGraph:{title:"Eileen — UI/UX & Visual Designer",description:"Design with logic. Tell stories with warmth.",images:["/og.png"]},twitter:{card:"summary_large_image",title:"Eileen — UI/UX & Visual Designer",images:["/og.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
