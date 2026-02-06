import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const attendanceData = [
    { month: 'Jul', student: 90, avg: 92 },
    { month: 'Aug', student: 98, avg: 95 },
    { month: 'Sep', student: 98, avg: 95 },
    { month: 'Oct', student: 98, avg: 95 },
    { month: 'Nov', student: 92, avg: 90 },
    { month: 'Dec', student: 96, avg: 94 },
    { month: 'Jan', student: 55, avg: 85 },
    { month: 'Feb', student: 95, avg: 92 },
];

export const AttendanceCard = (): JSX.Element => {
    return (
        <div className="flex flex-col h-full bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">Attendance Overview</h3>
                    <p className="text-sm text-gray-500 mt-0.5">Overall + class average, month-wise trend.</p>
                </div>

                {/* Big Badge / Metric */}
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-600">Overall:</span>
                    <span className="text-2xl font-bold text-primary leading-none">94.0%</span>
                    <span className="text-xs text-gray-500 self-end mb-0.5">Class avg: 94.8%</span>
                </div>
            </div>

            {/* Breakdown & Stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 p-4 bg-gray-50/50 rounded-lg border border-gray-100/50">
                <span className="text-xs font-bold text-completionGreen uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-completionGreen"></span>
                    Present: 22
                </span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Partially Present: 3
                </span>
                <span className="text-xs font-bold text-incompletionRed uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-incompletionRed"></span>
                    Absent: 0
                </span>
            </div>

            {/* Chart Area */}
            <div className="flex-1 w-full min-h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barMarkGap={5}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            domain={[0, 100]}
                            ticks={[0, 25, 50, 75, 100]}
                        />
                        <Tooltip
                            cursor={{ fill: '#f9fafb' }}
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                fontSize: '12px'
                            }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', color: '#374151' }} />
                        <Bar
                            dataKey="student"
                            fill="#004c6d"
                            name="Student"
                            radius={[4, 4, 0, 0]}
                            barSize={24}
                        />
                        <Bar
                            dataKey="avg"
                            fill="#E5E7EB"
                            name="Class Avg"
                            radius={[4, 4, 0, 0]}
                            barSize={24}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-400">
                    Month-wise attendance is computed from saved class attendance entries.
                </p>
            </div>
        </div>
    );
};
