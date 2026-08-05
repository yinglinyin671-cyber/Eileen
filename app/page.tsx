"use client";
import { useEffect, useState } from "react";

const cases = [
  {
    id: "01", discipline: "UI / UX DESIGN", title: "艺境", en: "ARTSCAPE APP",
    tagline: "让情绪在艺术里找到出口 / Let emotions find an outlet through art.",
    summary: "围绕情绪记录、艺术疗愈与内容探索构建的移动端体验。项目从竞品分析和用户画像出发，建立功能架构、用户旅程与线框流程，并延伸至视觉规范、IP 形象和完整高保真界面。",
    summaryEn: "A mobile experience connecting mood tracking, art-based healing and content discovery. The case covers research, personas, information architecture, user journeys, wireframes, visual guidelines, an original IP character and high-fidelity interfaces.",
    tags: ["UX Research", "Information Architecture", "UI System", "Prototype"],
    images: ["/portfolio/artscape-research.jpg", "/portfolio/artscape-screens.jpg"]
  },
  {
    id: "02", discipline: "BRAND DESIGN", title: "青岚窑", en: "QINGLAN KILN",
    tagline: "以视觉之美，赴生活之约 / A visual identity shaped by ceramic culture.",
    summary: "品牌视觉识别系统以宋代瓷器、汝窑天青色与传统建筑意象为核心，将器型和亭阁轮廓整合为品牌标志，并建立标准制图、辅助图形、包装物料与数字端应用。",
    summaryEn: "A visual identity system inspired by Song-dynasty ceramics, Ru-kiln celadon and traditional architecture. The system expands from logo construction into patterns, packaging, merchandise and digital touchpoints.",
    tags: ["Brand Strategy", "Visual Identity", "Packaging", "Digital Extension"],
    images: ["/portfolio/qinglan-cover.jpg", "/portfolio/qinglan-concept.jpg", "/portfolio/qinglan-grid.jpg", "/portfolio/qinglan-applications.jpg", "/portfolio/qinglan-digital.jpg"]
  }
];

const graphics = [
  { title: "中华昆仑关·海峡两岸情", en: "China’s Kunlun Pass — Feelings Across the Strait", image: "/portfolio/kunlun-pass.jpg", type: "Cultural Creative System" },
  { title: "福州油纸伞信息可视化", en: "Fuzhou Oil-paper Umbrella Infographic", image: "/portfolio/oil-paper-umbrella.jpg", type: "Information Design" },
  { title: "中国联通主题纹样", en: "China Unicom Cultural Pattern Series", image: "/portfolio/unicom-patterns.jpg", type: "Pattern & Poster" },
  { title: "平面视觉作品选", en: "Selected Graphic Works", image: "/portfolio/graphic-selection.jpg", type: "Poster & Illustration" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <main>
    <header className="nav"><a className="monogram" href="#top" aria-label="Eileen home">E.</a><div className="nav-note">VISUAL DESIGNER<br />SHANGHAI · 2026</div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span>{menuOpen ? "CLOSE" : "MENU"}</span><i /></button></header>
    <div className={`menu-panel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}><nav><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#profile" onClick={() => setMenuOpen(false)}>Profile</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav></div>

    <section className="hero" id="top"><div className="grain"/><div className="hero-meta"><span>PORTFOLIO</span><span>YIN YINGLIN</span><span>© 2026</span></div><h1 aria-label="Eileen"><span>E</span><span>i</span><span>l</span><span>e</span><span>e</span><span>n</span></h1><p className="intro">I’m Yin Yinglin, a Visual Communication Design student skilled in graphic, brand, cultural creative and UI design. I specialize in combining traditional Chinese style with modern visuals, and have won multiple design competition awards. Proficient in mainstream design software, I balance logical thinking and aesthetics, and love telling warm stories through design.</p><a className="scroll-hint" href="#profile"><span>SCROLL TO EXPLORE</span><i /></a></section>

    <section className="profile reveal" id="profile"><div className="section-label">01 — PROFILE / 个人简介</div><div className="profile-main"><h2>Design with logic.<br/><span>Tell stories with warmth.</span></h2><div className="profile-copy"><p>殷颖琳，视觉传达设计本科在读，专注 UI/UX、品牌与平面设计。擅长将传统文化符号转译为当代视觉语言，并以清晰的逻辑组织复杂信息。</p><p>Yin Yinglin is a Visual Communication Design student focused on UI/UX, brand and graphic design, translating cultural narratives into clear, contemporary visual systems.</p></div></div><div className="profile-facts"><div><b>2023—2027</b><span>广东科技学院<br/>Visual Communication Design</span></div><div><b>2 / 48</b><span>专业综测排名<br/>Academic Ranking</span></div><div><b>04</b><span>设计奖项<br/>Design Awards</span></div><div><b>AI · PS · C4D · XD</b><span>PR · AE<br/>Design Toolkit</span></div></div></section>

    <section className="work" id="work"><div className="work-intro reveal"><div className="section-label">02 — SELECTED WORK / 精选作品</div><h2>UI/UX → Brand → Graphic</h2><p>按目标岗位重新组织真实项目，从完整体验流程到品牌系统，再到文化与信息视觉设计。</p></div>
      {cases.map((item) => <article className="case reveal" key={item.id}><div className="case-head"><span className="case-index">{item.id}</span><div><small>{item.discipline}</small><h3>{item.title}<em>{item.en}</em></h3></div><p>{item.tagline}</p></div><div className="case-copy"><p>{item.summary}</p><p>{item.summaryEn}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="case-gallery">{item.images.map((src, index) => <figure key={src} className={index === 0 ? "featured" : ""}><img src={src} alt={`${item.title} project board ${index + 1}`} loading="lazy"/></figure>)}</div></article>)}

      <article className="graphic-case reveal"><div className="case-head"><span className="case-index">03</span><div><small>GRAPHIC DESIGN</small><h3>平面与文创<em>GRAPHIC & CULTURAL</em></h3></div><p>传统文化叙事、信息可视化、纹样与海报设计。</p></div><div className="graphic-grid">{graphics.map((item) => <figure key={item.title}><div className="graphic-image"><img src={item.image} alt={item.title} loading="lazy"/></div><figcaption><span>{item.type}</span><h4>{item.title}</h4><p>{item.en}</p></figcaption></figure>)}</div></article>
    </section>

    <section className="recognition reveal"><div className="section-label">03 — RECOGNITION / 荣誉</div><div className="award-list"><div><span>2023—2024</span><p>国家励志奖学金<br/><small>National Encouragement Scholarship</small></p></div><div><span>2026.05</span><p>蓝桥杯插画设计三等奖<br/><small>Lanqiao Cup — Illustration Design, Third Prize</small></p></div><div><span>2026.05</span><p>米兰设计周二等奖<br/><small>Milan Design Week — Second Prize</small></p></div><div><span>2026.06</span><p>ICDA 绿水青山设计比赛银奖、铜奖<br/><small>ICDA Design Competition — Silver & Bronze Awards</small></p></div></div></section>

    <footer id="contact"><div className="footer-kicker">OPEN TO UI/UX · BRAND · GRAPHIC ROLES</div><h2>Let’s make ideas<br/><em>visible.</em></h2><a href="mailto:3255304062@qq.com" className="contact-link">3255304062@QQ.COM <span>↗</span></a><div className="footer-bottom"><span>EILEEN — YIN YINGLIN</span><span>VISUAL COMMUNICATION DESIGN · 2026</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
