import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import menuItem1 from "@/assets/1.png";
import menuItem2 from "@/assets/2.png";
import menuItem3 from "@/assets/3.png";
import menuItem4 from "@/assets/4.png";
const items = [
    {
        name: 'Halo-Halo Large',
        category: 'Dessert',
        detail: 'Ube halaya, sweet beans, leche flan, shaved ice',
        price: '₱78.00',
        imageUrl: menuItem1,
        imageAlt: 'Halo-halo large with toppings',
    },
    {
        name: 'Halo-Halo Medium',
        category: 'Dessert',
        detail: 'Ube halaya, sweet beans, leche flan, shaved ice',
        price: '₱55.00',
        imageUrl: menuItem2,
        imageAlt: 'Halo-halo medium in cup',
    },
    {
        name: 'Crema De Leche',
        category: 'Dessert',
        detail: 'Creamy milk base with leche flan and toppings',
        price: '₱78.00',
        imageUrl: menuItem3,
        imageAlt: 'Crema de leche with toppings',
    },
    {
        name: 'Mais Con Yelo',
        category: 'Dessert',
        detail: 'Sweet corn, shaved ice, creamy milk, and toppings',
        price: '₱65.00',
        imageUrl: menuItem4,
        imageAlt: 'Mais con yelo with toppings',
    },
];
export default function MenuSection() {
    const scrollRef = useRef(null);
    const handleScroll = (offset) => {
        scrollRef.current?.scrollBy({
            left: offset,
            behavior: "smooth",
        });
    };
    return (_jsx("section", { id: "menu", className: "px-6 py-32 bg-(--warm-beige)", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [_jsxs("div", { children: [_jsx("p", { className: "font-subheading text-sm uppercase tracking-[0.3em] font-medium text-(--coffee-brown)", children: "A taste of local" }), _jsx("h2", { className: "mt-3 font-display text-4xl text-(--dark-espresso)", children: "Curated Menu Highlights" })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "rounded-full w-fit border-2 border-(--coffee-brown) px-6 py-2.5 text-sm font-semibold hover:bg-(--parchment) text-(--dark-espresso) transition-colors", children: "See Full Menu" }), _jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [_jsx("button", { onClick: () => handleScroll(-300), "aria-label": "Scroll left", className: "rounded-full border border-(--coffee-brown) bg-(--cream-white) p-2 text-sm shadow-sm hover:scale-105 transition", children: "<" }), _jsx("button", { onClick: () => handleScroll(300), "aria-label": "Scroll right", className: "rounded-full border border-(--coffee-brown) bg-(--coffee-brown) p-2 text-sm text-(--cream-white) shadow-sm hover:scale-105 transition", children: ">" })] })] })] }), _jsxs("div", { className: "relative mt-8 md:mt-16", children: [_jsx("button", { onClick: () => handleScroll(-300), "aria-label": "Scroll left", className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 \r\n            rounded-full bg-(--cream-white)/80 backdrop-blur-md \r\n            border border-(--coffee-brown) \r\n            p-3 shadow-md hover:scale-110 transition md:hidden", children: "<" }), _jsx("button", { onClick: () => handleScroll(300), "aria-label": "Scroll right", className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 \r\n            rounded-full bg-(--coffee-brown) text-(--cream-white)\r\n            p-3 shadow-md hover:scale-110 transition md:hidden", children: ">" }), _jsx("div", { ref: scrollRef, className: "flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory \r\n            scroll-smooth md:grid md:grid-cols-2 lg:grid-cols-4 \r\n            md:overflow-visible md:pb-0", children: items.map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: {
                                    y: -8,
                                    boxShadow: "0 20px 40px -15px rgba(28,10,0,0.15)"
                                }, className: "min-w-[80%] snap-center rounded-3xl border border-border \r\n                bg-(--cream-white) p-6 drop-shadow-sm cursor-pointer \r\n                group md:min-w-0", children: [_jsxs("div", { className: "relative mb-6 flex items-center justify-center", children: [_jsx("div", { className: "absolute h-36 w-36 rounded-full border border-(--soft-gold) opacity-40" }), _jsx("div", { className: "absolute h-44 w-44 rounded-full border border-(--soft-gold) opacity-20" }), _jsx("div", { className: "absolute h-52 w-52 rounded-full border border-(--soft-gold) opacity-10" }), _jsx("div", { className: "h-32 w-32 overflow-hidden rounded-full bg-(--parchment) drop-shadow-lg group-hover:scale-105 transition-transform duration-500", children: _jsx("img", { src: item.imageUrl, alt: item.imageAlt, className: "h-full w-full object-cover", loading: "lazy" }) })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-xs uppercase tracking-wider text-(--soft-gold) font-bold mb-1", children: item.category }), _jsx("h3", { className: "font-display text-lg text-(--dark-espresso)", children: item.name }), _jsx("div", { className: "mt-2 flex items-center justify-center gap-1 text-(--soft-gold)", children: Array.from({ length: 5 }).map((_, starIndex) => (_jsx("svg", { viewBox: "0 0 20 20", className: "h-3.5 w-3.5 fill-current", children: _jsx("path", { d: "M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L10 1.5z" }) }, `${item.name}-star-${starIndex}`))) })] }), _jsx("p", { className: "mt-3 text-center text-sm text-muted-foreground line-clamp-2", children: item.detail }), _jsxs("div", { className: "mt-6 flex flex-col items-center gap-3", children: [_jsx("span", { className: "text-lg font-bold text-(--dark-espresso)", children: item.price }), _jsx(Link, { to: "/auth/sign-in", className: "rounded-full border border-(--coffee-brown) \r\n                    bg-(--parchment) px-4 py-1.5 text-xs font-semibold uppercase \r\n                    tracking-wider text-(--dark-espresso) \r\n                    hover:bg-(--coffee-brown) hover:text-(--cream-white) transition", children: "Add to Cart" })] })] }, item.name))) })] })] }) }));
}
