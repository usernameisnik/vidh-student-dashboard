import { Navbar } from "../../components/Navbar";
import { StudentHeader } from "./components/StudentHeader";
import { AttendanceCard } from "./components/AttendanceCard";
import { PerformanceCard } from "./components/PerformanceCard";
import { HomeworkCard } from "./components/HomeworkCard";

export const StudentOverview = (): JSX.Element => {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col font-['DM_Sans']">
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Student Overview</h1>

                {/* Student Header */}
                <section className="w-full">
                    <StudentHeader />
                </section>

                {/* Analytics Grid - Grid layout for better hierarchy */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                    {/* Attendance & Homework - Side by Side details */}
                    <div className="w-full h-full">
                        <AttendanceCard />
                    </div>

                    <div className="w-full h-full">
                        <HomeworkCard />
                    </div>

                    {/* Performance - Hero Card Taking Full Width */}
                    <div className="lg:col-span-2 w-full">
                        <PerformanceCard />
                    </div>
                </section>
            </main>
        </div>
    );
};
