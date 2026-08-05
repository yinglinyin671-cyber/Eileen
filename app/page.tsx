"use client";
import { useEffect, useState } from "react";
const projects = [
  { no: "01", title: "字里有山河", en: "Landscapes Between Strokes", type: "Type · Cultural Publishing", tone: "vermilion" },
  { no: "02", title: "第二种月光", en: "The Second Moonlight", type: "Identity · Material Narrative", tone: "ink" },
  { no: "03", title: "微温协议", en: "The Warmth Protocol", type: "Interface · Emotional Interaction", tone: "jade" },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.16 }); document.querySelectorAll(".reveal").forEach((el) => io.observe(el)); return () => io.disconnect(); }, []);
  return <main>
    <header className="nav"><a className="monogram" href="#top" aria-label="Eileen home">E.</a><div className="nav-note">VISUAL DESIGNER<br />SHANGHAI · 2026</div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span>{menuOpen ? "CLOSE" : "MENU"}</span><i /></button></header>
    <div className={`menu-panel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}><nav><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#about" onClick={() => setMenuOpen(false)}>About me</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav></div>
    <section className="hero" id="top"><div className="grain" /><div className="orb orb-one" /><div className="orb orb-two" /><div className="hero-meta"><span>PORTFOLIO</span><span>YIN YINGLIN</span><span>© 2026</span></div><h1 aria-label="Eileen"><span>E</span><span>i</span><span>l</span><span>e</span><span>e</span><span>n</span></h1><p className="intro">I’m Yin Yinglin, a Visual Communication Design student skilled in graphic, brand, cultural creative and UI design. I specialize in combining traditional Chinese style with modern visuals, and have won multiple design competition awards. Proficient in mainstream design software, I balance logical thinking and aesthetics, and love telling warm stories through design.</p><a className="scroll-hint" href="#work"><span>SCROLL TO EXPLORE</span><i /></a></section>
    <section className="manifesto reveal" id="about"><div className="section-tag">01 — PROFILE</div><p className="manifesto-copy">I translate inherited symbols<br />into <em>living languages</em> —<br />precise, warm, remembered.</p><div className="seal"><span>Y</span><small>YIN<br />YINGLIN</small></div></section>
    <section className="work" id="work"><div className="work-header reveal"><div className="section-tag">02 — SELECTED WORK</div><h2>Selected<br /><em>Projects</em></h2><span className="year">2023—2026</span></div><div className="project-grid">{projects.map((project) => <article className={`project reveal ${project.tone}`} key={project.no}><div className="project-art"><span className="project-no">{project.no}</span><div className="shape shape-a"/><div className="shape shape-b"/><div className="art-word">{project.title.slice(0, 1)}</div></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.en}</p></div><span>{project.type}</span></div></article>)}</div></section>
    <section className="services reveal"><div className="section-tag">03 — PRACTICE</div><div className="service-list"><div><span>01</span><h3>Old Meanings, New Grammar</h3><small>旧意新译</small></div><div><span>02</span><h3>Warmth as a System</h3><small>温度系统</small></div><div><span>03</span><h3>Poetry Inside Logic</h3><small>逻辑里的诗意</small></div><div><span>04</span><h3>Stories You Can Touch</h3><small>可触摸的叙事</small></div></div></section>
    <footer id="contact"><div className="footer-kicker">HAVE A PROJECT IN MIND?</div><h2>Make the familiar<br /><em>strange again.</em></h2><a href="mailto:hello@eileen.design" className="contact-link">HELLO@EILEEN.DESIGN <span>↗</span></a><div className="footer-bottom"><span>EILEEN — VISUAL DESIGNER</span><span>MADE WITH CARE · 2026</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}



