import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import MenuSection from '@/components/landing/MenuSection';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';
export default function LandingPage() {
    return (_jsxs("div", { className: "min-h-screen", style: { backgroundColor: 'var(--warm-beige)' }, children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(MenuSection, {}), _jsx(HowItWorks, {}), _jsx(Testimonials, {}), _jsx(Footer, {})] }));
}
