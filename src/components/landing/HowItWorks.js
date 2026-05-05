import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const steps = [
    {
        step: "01",
        title: 'Browse',
        detail: 'Explore our digital menu from your phone or the counter kiosk.',
    },
    {
        step: "02",
        title: 'Order & Pay',
        detail: 'Select your items, customize to your liking, and pay seamlessly.',
    },
    {
        step: "03",
        title: 'Track',
        detail: 'Get real-time updates on your order status while you wait.',
    },
    {
        step: "04",
        title: 'Enjoy',
        detail: 'Pick up at the counter or have it served straight to your table.',
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export default function HowItWorks() {
    return (_jsx("section", { id: "how", className: "px-6 py-32 bg-(--warm-beige)", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "text-center max-w-2xl mx-auto mb-20", children: [_jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "font-subheading text-sm uppercase tracking-[0.3em] font-semibold text-(--coffee-brown)", children: "Simple & Fast" }), _jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "mt-4 font-display text-4xl text-(--dark-espresso)", children: "How Quezel's Works" })] }), _jsxs(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-100px" }, className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative", children: [_jsx("div", { className: "hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-(--soft-gold) to-transparent opacity-30" }), steps.map((step, index) => (_jsxs(motion.div, { variants: itemVariants, whileHover: { y: -5 }, className: "relative rounded-3xl border border-border bg-(--cream-white) p-8 drop-shadow-lg text-center flex flex-col items-center", children: [_jsx("div", { className: "w-14 h-14 rounded-full bg-(--parchment) border border-(--soft-gold) flex items-center justify-center font-display text-xl text-(--dark-espresso) mb-6 relative z-10", children: step.step }), _jsx("h3", { className: "font-display text-2xl text-(--dark-espresso)", children: step.title }), _jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: step.detail })] }, step.title)))] })] }) }));
}
