import { Navbar } from "../../components/Navbar";
import { StudentHeader } from "./components/StudentHeader";
import { AttendanceCard } from "./components/AttendanceCard";
import { PerformanceCard } from "./components/PerformanceCard";
import { HomeworkCard } from "./components/HomeworkCard";

export const StudentOverview = (): JSX.Element => {
    return (
        <div className="min-h-screen w-full bg-vidh-bg flex flex-col font-['DM_Sans']">
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
                <h1 className="text-3xl font-bold text-gray-900">Student Overview</h1>

                {/* Student Header */}
                <section className="w-full">
                    <StudentHeader />
                </section>

                {/* Analytics Grid - Vertical stack on mobile, horizontal on large screens */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
                    {/* Attendance - Full width on mobile, 5 columns on large screens */}
                    <div className="lg:col-span-5">
                        <AttendanceCard />
                    </div>

                    {/* Performance - Full width on mobile, 4 columns on large screens */}
                    <div className="lg:col-span-4">
                        <PerformanceCard />
                    </div>

                    {/* Homework - Full width on mobile, 3 columns on large screens */}
                    <div className="lg:col-span-3">
                        <HomeworkCard />
                    </div>
                </section>
            </main>
        </div>
    );
};
