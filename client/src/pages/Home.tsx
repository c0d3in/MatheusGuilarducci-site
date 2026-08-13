// Design: Azul Executivo — composição assimétrica, azul profundo, diagonais automotivas e ações de contato imediatas.
import { ArrowUpRight, Check, ChevronRight, Clock3, Copy, ExternalLink, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5531996865166?text=Olá%20Matheus,%20vim%20pelo%20seu%20cartão%20digital.";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Jacaranda%2C+643%2C+Horto%2C+Ipatinga%2C+MG";
const CARD_URL = "/manus-storage/cartao-matheus-azul_170c9392.png";

function ActionCard({ icon: Icon, eyebrow, title, detail, href, external = false, onClick }: { icon: typeof Phone; eyebrow: string; title: string; detail: string; href?: string; external?: boolean; onClick?: () => void }) {
  const content = <><span className="action-icon"><Icon size={20} strokeWidth={2.2} /></span><span className="action-copy"><span className="action-eyebrow">{eyebrow}</span><strong>{title}</strong><span className="action-detail">{detail}</span></span><ArrowUpRight className="action-arrow" size={19} /></>;
  return href ? <a className="action-card" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{content}</a> : <button className="action-card action-button" onClick={onClick}>{content}</button>;
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { await navigator.clipboard?.writeText("matheus.neiva@brasauto.com.br"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };

  return <main className="site-shell">
    <section className="hero-section">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <header className="topbar"><div className="brand-lockup"><span className="brand-mark">B</span><span><small>BRASAUTO</small><b>IPATINGA</b></span></div><span className="availability"><i /> Atendimento direto</span></header>
      <div className="hero-content container">
        <div className="hero-copy"><p className="kicker">MATHEUS GUILARDUCCI · CONSULTOR ESPECIALISTA</p><h1>Matheus Guilarducci<br /><em>consultor especialista.</em></h1><p className="hero-lede">Seu próximo carro começa com uma conversa — atendimento direto na Brasauto Ipatinga, com clareza em cada etapa e as principais opções Peugeot e Citroën.</p><div className="hero-cta-row"><a className="primary-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Falar pelo WhatsApp <ArrowUpRight size={18} /></a><a className="secondary-cta" href="#contato">Ver formas de contato <ChevronRight size={18} /></a></div></div>
        <div className="hero-side-note"><span>01</span><p>Atendimento<br />em Ipatinga/MG</p></div>
      </div>
      <div className="hero-brands container"><span>Marcas atendidas</span><div className="brand-pill"><img src="/manus-storage/cartao-matheus-azul_170c9392.png" alt="Logos Peugeot, Citroën e Brasauto" /></div><span className="brand-caption">Peugeot&nbsp;&nbsp;·&nbsp;&nbsp;Citroën&nbsp;&nbsp;·&nbsp;&nbsp;Brasauto</span></div>
    </section>

    <section className="contact-section" id="contato"><div className="container contact-layout"><div className="section-intro"><p className="kicker blue">PAINEL DE ATENDIMENTO DIRETO</p><h2>Escolha como<br /><span>quer conversar.</span></h2><p>Toque em uma opção e fale comigo diretamente. Estou pronto para ajudar você a encontrar seu próximo veículo.</p><div className="trust-line"><ShieldCheck size={18} /><span>Informação clara. Atendimento de confiança.</span></div></div><div className="actions-grid"><ActionCard icon={MessageCircle} eyebrow="Resposta rápida" title="WhatsApp" detail="Converse comigo agora" href={WHATSAPP_URL} external /><ActionCard icon={Phone} eyebrow="Atendimento direto" title="Ligar agora" detail="(31) 99686-5166" href="tel:+5531996865166" /><ActionCard icon={Mail} eyebrow="Para propostas" title="Enviar e-mail" detail="matheus.neiva@brasauto.com.br" onClick={copyEmail} /><ActionCard icon={MapPin} eyebrow="Onde estamos" title="Abrir localização" detail="Horto · Ipatinga/MG" href={MAP_URL} external /></div></div></section>

    <section className="profile-section"><div className="container profile-layout"><div className="profile-number">02</div><div><p className="kicker">CONSULTORIA PERSONALIZADA</p><h2>Matheus<br /><span>Guilarducci</span></h2><p className="profile-text">Especialista em veículos Peugeot e Citroën, com atendimento na Brasauto Ipatinga. Conte comigo para comparar possibilidades, tirar dúvidas e seguir com segurança.</p></div><div className="profile-facts"><div><Clock3 size={20} /><span>Atendimento<br /><b>de segunda a sábado</b></span></div><div><MapPin size={20} /><span>Rua Jacaranda, 643<br /><b>Horto · Ipatinga/MG</b></span></div></div></div></section>

    <section className="verse-section"><div className="container verse-inner"><span className="quote-mark">“</span><blockquote>Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.</blockquote><cite>Provérbios 3:5</cite><a className="download-card" href={CARD_URL} download><ExternalLink size={16} /> Salvar cartão digital</a></div></section>
    <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Brasauto Ipatinga</span><span>Matheus Guilarducci · Consultor Especialista</span></div></footer>
    {copied && <div className="copy-toast"><Check size={16} /> E-mail copiado</div>}
  </main>;
}
