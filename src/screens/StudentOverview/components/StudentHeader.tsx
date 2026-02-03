import { Badge } from "../../../components/ui/badge";

export const StudentHeader = (): JSX.Element => {
    return (
        <div className="w-full bg-white rounded-lg border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="relative">
                <img
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-vidh-bg"
                    src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=2576&auto=format&fit=crop"
                    alt="Student Profile"
                />
                <Badge className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 border-2 border-white w-6 h-6 p-0 rounded-full" />
            </div>

            <div className="flex flex-col items-center md:items-start gap-4 flex-1 w-full text-center md:text-left">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['DM_Sans']">
                        Sarah Johnson
                    </h2>
                    <p className="text-gray-500 font-medium">Class X - Section A</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full bg-vidh-bg/50 p-5 rounded-lg">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Roll No</span>
                        <span className="text-gray-900 font-bold">24</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Gender</span>
                        <span className="text-gray-900 font-bold">Female</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</span>
                        <span className="text-gray-900 font-bold">+91 98765 43210</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">DOB</span>
                        <span className="text-gray-900 font-bold">12 Aug 2008</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
