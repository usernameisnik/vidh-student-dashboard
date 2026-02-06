import { VidhIntelligenceSummary } from "./VidhIntelligenceSummary";

export const StudentHeader = (): JSX.Element => {
    return (
        <div className="w-full bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">

                {/* Left Side: Profile & Details */}
                <div className="flex-1 flex flex-col gap-6 lg:pr-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 text-center sm:text-left">
                        <div className="relative shrink-0">
                            <img
                                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-vidh-bg"
                                src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="Student Profile"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['DM_Sans'] tracking-tight">
                                Sarah Johnson
                            </h2>
                            <p className="text-gray-500 font-medium mt-1 text-base">Class X - Section A</p>
                        </div>
                    </div>

                    {/* Stats Grid - Cleaner layout without wrapper */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 pt-2 border-t border-gray-50 mt-1">
                        <div>
                            <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Roll No</span>
                            <span className="text-base font-bold text-gray-900">24</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Gender</span>
                            <span className="text-base font-bold text-gray-900">Female</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Phone</span>
                            <span className="text-base font-bold text-gray-900">+91 98765 43210</span>
                        </div>
                        <div>
                            <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">DOB</span>
                            <span className="text-base font-bold text-gray-900">12 Aug 2008</span>
                        </div>
                    </div>
                </div>

                {/* Divider for Desktop */}
                <div className="hidden lg:block w-px bg-gray-100 mx-8 self-stretch"></div>

                {/* Right Side: Vidh Summary */}
                <div className="lg:w-[420px] shrink-0 border-t lg:border-t-0 border-gray-100 pt-6 lg:pt-0">
                    <VidhIntelligenceSummary />
                </div>

            </div>
        </div>
    );
};
