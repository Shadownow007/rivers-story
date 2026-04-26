import React, { useMemo, useState } from "react";
import { ShoppingCart, Star, ShieldCheck, Truck, BadgePercent, MessageCircle, CreditCard, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Luz LED Automática com Sensor de Movimento",
    oldPrice: "R$ 97,99",
    price: "R$ 69,90",
    sold: "+10 mil vendidos",
    badge: "Mais vendida",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    ],
    desc: "Ilumine corredores, escadas e guarda-roupas sem complicação. Acende sozinha ao detectar movimento.",
  },
  {
    id: 2,
    name: "Removedor de Pelos Profissional",
    oldPrice: "R$ 79,90",
    price: "R$ 39,90",
    sold: "+6 mil vendidos",
    badge: "Oferta relâmpago",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    ],
    desc: "Praticidade para remover pelos, fiapos e sujeiras em segundos em roupas, sofás e tecidos.",
  },
  {
    id: 3,
    name: "Organizador de Cabos",
    oldPrice: "R$ 69,00",
    price: "R$ 49,99",
    sold: "+4 mil vendidos",
    badge: "Casa organizada",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    ],
    desc: "Acabe com a bagunça dos fios e deixe seu setup ou sua casa com aparência limpa e organizada.",
  },
  {
    id: 4,
    name: "Mini Seladora de Embalagem",
    oldPrice: "R$ 55,99",
    price: "R$ 29,99",
    sold: "+3 mil vendidos",
    badge: "Utilidade diária",
    image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
    ],
    desc: "Conserve alimentos por mais tempo com uma seladora portátil fácil de usar e guardar.",
  },
  {
    id: 5,
    name: "Suporte Veicular Magnético",
    oldPrice: "R$ 129,00",
    price: "R$ 80,00",
    sold: "+2 mil vendidos",
    badge: "Direção prática",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    ],
    desc: "Fixação firme e prática para usar GPS e chamadas no carro com segurança e conforto.",
  },
  {
    id: 6,
    name: "Hand Spinner Anti-stress",
    oldPrice: "R$ 79,99",
    price: "R$ 59,99",
    sold: "+5 mil vendidos",
    badge: "Tendência",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    ],
    desc: "Perfeito para aliviar ansiedade, estresse e melhorar o foco no dia a dia.",
  },
];

const testimonials = [
  {
    name: "Mariana S.",
    text: "Comprei e chegou certinho. A loja passa confiança e o produto veio igual ao anúncio.",
  },
  {
    name: "Carlos R.",
    text: "Gostei porque o site é rápido e fácil de comprar. Já peguei mais de um item em promoção.",
  },
  {
    name: "Juliana M.",
    text: "Atendimento muito bom e os produtos têm preço bem melhor do que eu achei em outros lugares.",
  },
];

const faqs = [
  {
    q: "Em quanto tempo meu pedido é enviado?",
    a: "Normalmente em até 1 a 3 dias úteis após a confirmação do pagamento.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Pix, cartão de crédito e outras opções que você configurar no seu checkout, como Mercado Pago ou Stripe.",
  },
  {
    q: "Posso pedir ajuda antes de comprar?",
    a: "Sim. O botão de WhatsApp fica disponível para tirar dúvidas rápidas e ajudar na finalização.",
  },
  {
    q: "Tem garantia?",
    a: "Você pode configurar sua política, mas a recomendação é informar garantia e troca para gerar mais confiança.",
  },
];

function formatWhatsAppMessage(productName) {
  return encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}. Pode me ajudar a finalizar a compra?`);
}

function Header({ cartCount, onCartOpen }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Rivers Story</p>
          <h1 className="text-xl font-bold text-white md:text-2xl">Ofertas inteligentes para vender todos os dias</h1>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#produtos"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 md:inline-block"
          >
            Ver produtos
          </a>
          <button
            onClick={onCartOpen}
            className="relative rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            <span className="flex items-center gap-2">
              <ShoppingCart size={18} /> Carrinho
            </span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(to_bottom,_#020617,_#0f172a)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
            Loja pronta para vender
          </span>
          <h2 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
            Transforme visitas em compras com uma vitrine bonita, rápida e confiável.
          </h2>
          <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
            Produtos com preço chamativo, provas sociais, visual profissional e seções pensadas para converter mais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#produtos" className="rounded-2xl bg-cyan-400 px-6 py-3 text-center font-bold text-slate-950 transition hover:translate-y-[-1px]">
              Comprar agora
            </a>
            <a href="#beneficios" className="rounded-2xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10">
              Ver benefícios
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">+20 mil</p>
              <p className="text-sm text-slate-300">Clientes impactados</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Pix + Cartão</p>
              <p className="text-sm text-slate-300">Checkout flexível</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 col-span-2 md:col-span-1">
              <p className="text-2xl font-black text-white">Suporte</p>
              <p className="text-sm text-slate-300">Venda com WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-3xl" />
          <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/30">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Loja online profissional"
              className="h-[460px] w-full rounded-[24px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-950/85 p-5 backdrop-blur">
              <p className="text-sm text-cyan-300">Oferta em destaque</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Crie uma loja que passe confiança</h3>
              <p className="mt-2 text-sm text-slate-300">Visual premium, foco em conversão e espaço para produtos virais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: ShieldCheck, title: "Compra segura", text: "Exiba confiança com selos, políticas claras e um layout profissional." },
    { icon: Truck, title: "Entrega informada", text: "Mostre prazos, envie atualizações e reduza objeções na compra." },
    { icon: CreditCard, title: "Pagamento fácil", text: "Estruture a página para checkout com Pix, cartão e outras opções." },
    { icon: BadgePercent, title: "Promoções fortes", text: "Trabalhe com preços de antes e agora para aumentar a sensação de oportunidade." },
  ];

  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Benefícios</p>
        <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">A estrutura que uma loja precisa para vender mais</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <item.icon className="mb-4 text-cyan-300" size={30} />
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onOpen, onAdd }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl shadow-black/20"
    >
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
          {product.badge}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{product.sold}</p>
        <h3 className="mt-2 min-h-[56px] text-xl font-bold text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{product.desc}</p>

        <div className="mt-4 flex items-end gap-3">
          <span className="text-sm text-slate-400 line-through">{product.oldPrice}</span>
          <span className="text-2xl font-black text-white">{product.price}</span>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={() => onOpen(product)}
            className="flex-1 rounded-2xl border border-white/15 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Ver produto
          </button>
          <button
            onClick={() => onAdd(product)}
            className="flex-1 rounded-2xl bg-cyan-400 px-4 py-3 font-bold text-slate-950 transition hover:brightness-105"
          >
            Adicionar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductModal({ product, onClose, onAdd }) {
  const [index, setIndex] = useState(0);

  if (!product) return null;

  const prev = () => setIndex((i) => (i === 0 ? product.gallery.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === product.gallery.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <div className="relative max-h-[95vh] w-full max-w-6xl overflow-auto rounded-[32px] border border-white/10 bg-slate-950 p-4 md:p-6">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full border border-white/10 px-4 py-2 text-white">Fechar</button>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
              <img src={product.gallery[index]} alt={product.name} className="h-[420px] w-full object-cover" />
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-2 text-white">
                <ChevronLeft size={22} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-2 text-white">
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {product.gallery.map((img, i) => (
                <button key={img} onClick={() => setIndex(i)} className={`overflow-hidden rounded-2xl border ${index === i ? "border-cyan-300" : "border-white/10"}`}>
                  <img src={img} alt={`${product.name} ${i + 1}`} className="h-24 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">{product.badge}</span>
            <h3 className="text-3xl font-black text-white md:text-4xl">{product.name}</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">{product.desc}</p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-lg text-slate-400 line-through">{product.oldPrice}</span>
              <span className="text-4xl font-black text-white">{product.price}</span>
            </div>
            <p className="mt-3 text-sm text-cyan-300">{product.sold}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => onAdd(product)}
                className="rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-slate-950"
              >
                Adicionar ao carrinho
              </button>
              <a
                href={`https://wa.me/5511999999999?text=${formatWhatsAppMessage(product.name)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white hover:bg-white/10"
              >
                <MessageCircle size={20} /> Continuar com WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-bold text-white">O que destacar nesse produto</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Benefício principal logo acima da dobra</li>
                <li>• Fotos claras mostrando uso real</li>
                <li>• Preço promocional com senso de urgência</li>
                <li>• Botão de compra visível no celular</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, items, onClose, onAdd, onRemove, onDecrease }) {
  const total = useMemo(() => {
    return items
      .reduce((sum, item) => sum + Number(item.price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) * item.qty, 0)
      .toFixed(2)
      .replace(".", ",");
  }, [items]);

  return (
    <div className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/60 transition ${open ? "opacity-100" : "opacity-0"}`} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-slate-950 p-5 transition duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-white">Seu carrinho</h3>
          <button onClick={onClose} className="rounded-full border border-white/10 px-4 py-2 text-white">Fechar</button>
        </div>

        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-white/15 p-6 text-center text-slate-300">
              Seu carrinho está vazio.
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="rounded-[28px] border border-white/10 bg-white/5 p-4">
                <div className="flex gap-3">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-2xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <h4 className="line-clamp-2 font-bold text-white">{item.name}</h4>
                    <p className="mt-1 text-sm text-cyan-300">{item.price}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => onDecrease(item.id)} className="rounded-full border border-white/10 p-1 text-white"><Minus size={16} /></button>
                      <span className="min-w-6 text-center text-white">{item.qty}</span>
                      <button onClick={() => onAdd(item)} className="rounded-full border border-white/10 p-1 text-white"><Plus size={16} /></button>
                      <button onClick={() => onRemove(item.id)} className="ml-auto text-sm text-red-300">Remover</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between text-slate-300">
            <span>Total</span>
            <span className="text-2xl font-black text-white">R$ {total}</span>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-cyan-400 px-5 py-4 font-bold text-slate-950">
            Finalizar compra
          </button>
          <a
            href="https://wa.me/5511999999999?text=Olá! Quero finalizar minha compra."
            target="_blank"
            rel="noreferrer"
            className="mt-3 block w-full rounded-2xl border border-white/15 px-5 py-4 text-center font-semibold text-white hover:bg-white/10"
          >
            💬 continuar com WhatsApp (mais rápido vender)
          </a>
        </div>
      </aside>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Provas sociais</p>
        <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Comentários que ajudam a converter mais</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex gap-1 text-yellow-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="leading-7 text-slate-300">“{item.text}”</p>
            <p className="mt-4 font-bold text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Dúvidas frequentes</p>
        <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Respostas que reduzem a insegurança na compra</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.q} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <button onClick={() => setOpenIndex(index === openIndex ? -1 : index)} className="flex w-full items-center justify-between gap-3 text-left">
              <span className="text-lg font-bold text-white">{faq.q}</span>
              <span className="text-cyan-300">{index === openIndex ? "−" : "+"}</span>
            </button>
            {index === openIndex && <p className="mt-4 leading-7 text-slate-300">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-bold text-white">Rivers Story</p>
          <p>Loja virtual pronta para vender com visual profissional.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#produtos" className="hover:text-white">Produtos</a>
          <a href="#beneficios" className="hover:text-white">Benefícios</a>
          <a href="#faq" className="hover:text-white">Ajuda</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <Benefits />

      <section id="produtos" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Produtos em destaque</p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Escolha os itens com mais potencial de venda</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Você pode começar com poucos produtos, validar o que vende e depois expandir sem bagunçar a loja.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onOpen={setSelected} onAdd={addToCart} />
          ))}
        </div>
      </section>

      <Testimonials />
      <section id="faq"><FAQ /></section>
      <Footer />

      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onAdd={addToCart} onRemove={removeItem} onDecrease={decreaseQty} />
    </div>
  );
}
