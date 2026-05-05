import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Coffee, Smartphone, CreditCard, Utensils } from "lucide-react";
const features = [
    {
        title: "Seamless Ordering",
        description: "Order ahead for pickup or delivery with our intuitive app interface.",
        icon: _jsx(Smartphone, { className: "size-6 text-(--soft-gold)" }),
    },
    {
        title: "Smart POS System",
        description: "Fast, reliable point-of-sale for a smooth dine-in experience.",
        icon: _jsx(CreditCard, { className: "size-6 text-(--soft-gold)" }),
    },
    {
        title: "Artisanal Coffee",
        description: "Sourced directly, roasted locally, and brewed with precision.",
        icon: _jsx(Coffee, { className: "size-6 text-(--soft-gold)" }),
    },
    {
        title: "Local Favorites",
        description: "From our signature breakfast plates to our house-special Halo-Halo.",
        icon: _jsx(Utensils, { className: "size-6 text-(--soft-gold)" }),
    },
];
export default function FeaturesSection() {
    return (_jsx("section", { className: "px-6 py-24 bg-(--parchment)", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("p", { className: "font-subheading text-sm uppercase tracking-[0.3em] text-(--coffee-brown)", children: "More than just a cafe" }), _jsx("h2", { className: "mt-4 font-display text-4xl", children: "Modern Convenience meets Cozy Comfort" })] }), _jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: features.map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, whileHover: { scale: 1.02 }, className: "p-8 rounded-2xl bg-(--cream-white) border border-(--border) shadow-diffuse flex flex-col items-start gap-4", children: [_jsx("div", { className: "p-3 rounded-full bg-(--dark-espresso)", children: feature.icon }), _jsx("h3", { className: "font-display text-xl", children: feature.title }), _jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: feature.description })] }, feature.title))) })] }) }));
}
