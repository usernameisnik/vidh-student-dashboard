import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChevronDown } from 'lucide-react';

const attendanceData = [
    { month: 'Jun', student: 90, avg: 85 },
    { month: 'Jul', student: 85, avg: 82 },
    { month: 'Aug', student: 95, avg: 88 },
    { month: 'Sep', student: 88, avg: 84 },
    { month: 'Oct', student: 92, avg: 86 },
    { month: 'Nov', student: 96, avg: 87 },
];

export const AttendanceCard = (): JSX.Element => {
    return (
        <div className="w-full bg-white rounded-lg border border-gray-100 p-6 flex flex-col gap-6 shadow-sm h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-gray-900">Attendance Overview</h3>
                <div className="relative">
                    <select className="text-sm border border-gray-200 bg-white text-gray-700 rounded-lg pl-3 pr-9 py-2.5 cursor-pointer outline-none focus:ring-2 focus:ring-vidh-orange focus:border-vidh-orange transition-all appearance-none">
                        <option>This Academic Year</option>
                        <option>Last Academic Year</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="flex flex-col bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                    <span className="text-xs text-green-700 font-semibold mb-1.5">Present</span>
                    <span className="text-lg sm:text-xl font-bold text-green-800">142</span>
                    <span className="text-xs text-green-600 mt-0.5">Days</span>
                </div>
                <div className="flex flex-col bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                    <span className="text-xs text-red-700 font-semibold mb-1.5">Absent</span>
                    <span className="text-lg sm:text-xl font-bold text-red-800">8</span>
                    <span className="text-xs text-red-600 mt-0.5">Days</span>
                </div>
                <div className="flex flex-col bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                    <span className="text-xs text-orange-700 font-semibold mb-1.5">Rate</span>
                    <span className="text-lg sm:text-xl font-bold text-orange-800">94.6%</span>
                    <span className="text-xs text-orange-600 mt-0.5">Overall</span>
                </div>
            </div>

            <div className="flex-1 min-h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorStudent" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#E56300" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#E56300" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 13, fontWeight: 500 }}
                            dy={8}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            domain={[70, 100]}
                            ticks={[70, 80, 90, 100]}
                            dx={-5}
                        />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                padding: '8px 12px'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="student"
                            stroke="#E56300"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorStudent)"
                            name="My Attendance"
                        />
                        <Area
                            type="monotone"
                            dataKey="avg"
                            stroke="#9ca3af"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                            fill="none"
                            name="Class Avg"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-vidh-orange"></span>
                    <span className="text-gray-700 font-medium">My Attendance</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    <span className="text-gray-700 font-medium">Class Average</span>
                </div>
            </div>
        </div>
    );
};
