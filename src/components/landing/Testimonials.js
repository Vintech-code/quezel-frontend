import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const testimonials = [
    {
        quote: 'A quiet sanctuary with the most thoughtful espresso service in town.',
        name: 'Mira L.',
        title: 'Designer',
    },
    {
        quote: 'The tasting flight feels like a tiny coffee ceremony. I come weekly.',
        name: 'Jonas P.',
        title: 'Creative director',
    },
    {
        quote: 'Warm, slow, intentional. The playlist alone is worth a visit.',
        name: 'Nina S.',
        title: 'Writer',
    },
];
export default function Testimonials() {
    return (_jsx("section", { id: "testimonials", className: "px-6 py-20", children: _jsxs("div", { className: "mx-auto max-w-6xl", children: [_jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [_jsxs("div", { children: [_jsx("p", { className: "font-subheading text-sm uppercase tracking-[0.3em] text-(--coffee-brown)", children: "Guest stories" }), _jsx("h2", { className: "mt-3 font-display text-3xl", children: "What people are saying" })] }), _jsx("span", { className: "text-sm text-muted-foreground", children: "4.9 average rating" })] }), _jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: testimonials.map((item) => (_jsxs("div", { className: "rounded-2xl border border-border bg-(--cream-white) p-6 drop-shadow-lg", children: [_jsxs("p", { className: "font-serif-light text-lg", children: ["\"", item.quote, "\""] }), _jsxs("div", { className: "mt-6", children: [_jsx("p", { className: "text-sm font-semibold", children: item.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: item.title })] })] }, item.name))) })] }) }));
}
