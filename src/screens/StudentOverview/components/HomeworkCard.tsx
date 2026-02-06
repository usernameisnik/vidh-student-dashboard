
import { ComposedChart, Area, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const homeworkData = [
    { month: 'Jul', student: 28, classAvg: 25 },
    { month: 'Sep', student: 58, classAvg: 62 },
    { month: 'Nov', student: 35, classAvg: 48 },
    { month: 'Dec', student: 48, classAvg: 40 },
    { month: 'Feb', student: 22, classAvg: 2 },
];

export const HomeworkCard = (): JSX.Element => {
    return (
        <div className="flex flex-col h-full bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">Homework Analysis</h3>
                    <p className="text-sm text-gray-500 mt-0.5">Overall student vs class average, month-wise.</p>
                </div>

                {/* Big Badge / Metric */}
                <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-600">Overall:</span>
                    <span className="text-2xl font-bold text-primary leading-none">35.8%</span>
                    <span className="text-xs text-gray-500 self-end mb-0.5">Class avg: 39.8%</span>
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 w-full min-h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={homeworkData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorStudent" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#004c6d" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#004c6d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f3f4f6" />
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
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                fontSize: '12px'
                            }}
                        />
                        <Legend
                            iconType="circle"
                            wrapperStyle={{ fontSize: '12px', paddingTop: '10px', color: '#374151' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="classAvg"
                            name="Class average"
                            stroke="#9CA3AF"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={{ r: 4, fill: '#9CA3AF', strokeWidth: 0 }}
                            activeDot={{ r: 6 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="student"
                            name="Student"
                            stroke="#004c6d"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorStudent)"
                            dot={{ r: 4, fill: '#004c6d', strokeWidth: 0 }}
                            activeDot={{ r: 7 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-400">
                    Based on homework results marks saved for the class.
                </p>
            </div>
        </div>
    );
};
