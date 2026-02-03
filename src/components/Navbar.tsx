import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "About", href: "#" },
    { label: "For Students", href: "#" },
    { label: "For Administration", href: "#" },
    { label: "For Govt.", href: "#" },
    { label: "Contact Us", href: "#" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full px-4 py-3 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* Using the existing logo images from the original code if possible, or a placeholder */}
                    <div className="flex items-end gap-1">
                        <img
                            className="w-[42px] h-[22px] object-contain"
                            alt="Logo Icon"
                            src="/group.png"
                        />
                        <img
                            className="w-[78px] h-[28px] object-contain"
                            alt="Logo Text"
                            src="/group-1000002951.png"
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-gray-900 hover:text-primary font-medium text-lg transition-colors font-['DM_Sans']"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Call to Action */}
                <div className="hidden lg:flex">
                    <Button className="bg-[#1e1e1e] hover:bg-[#1e1e1e]/90 text-white rounded-full px-6 py-2 font-['DM_Sans']">
                        Request a Demo
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-gray-100">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-gray-900 font-medium text-lg py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button className="w-full bg-[#1e1e1e] hover:bg-[#1e1e1e]/90 text-white rounded-full py-3 mt-2">
                        Request a Demo
                    </Button>
                </div>
            )}
        </header>
    );
};
