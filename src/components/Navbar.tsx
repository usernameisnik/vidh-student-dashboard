export const Navbar = () => {
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
            </div>
        </header>
    );
};
