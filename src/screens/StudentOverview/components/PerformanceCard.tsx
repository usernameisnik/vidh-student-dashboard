import { useState } from 'react';
import { BarChart, Bar, ComposedChart, Area, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const examTrendData = [
    { exam: 'Slip test -2', student: 52, avg: 55 },
    { exam: 'Term III', student: 29, avg: 45 },
    { exam: 'Term II - Practi', student: 80, avg: 72 },
    { exam: 'SA 2', student: 12, avg: 40 },
    { exam: 'dsadd', student: 98, avg: 85 },
    { exam: 'Test Exam', student: 92, avg: 78 },
    { exam: 'WRP', student: 48, avg: 60 },
    { exam: 'est', student: 58, avg: 65 },
    { exam: 'asd', student: 18, avg: 35 },
    { exam: 'dg', student: 31, avg: 50 },
    { exam: 'Test 4', student: 4, avg: 42 },
    { exam: 'asd', student: 28, avg: 58 },
];

const subjectData = [
    { subject: 'BIO', score: 52 },
    { subject: 'PHY', score: 43 },
    { subject: 'CHE', score: 42 },
    { subject: 'SOC', score: 38 },
    { subject: 'SCI', score: 35 },
    { subject: 'HIN', score: 28 },
    { subject: 'MAT', score: 28 },
    { subject: 'TEL', score: 20 },
    { subject: 'ENG', score: 10 },
];

const rankData = [
    { exam: 'Slip test 5', rank: 1 },
    { exam: 'Term III', rank: 4 },
];

export const PerformanceCard = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_activeTab, _setActiveTab] = useState('unit');

    return (
        <div className="flex flex-col h-full bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">Exam Performance Overview</h3>
                    <p className="text-sm text-gray-500 mt-0.5">Overall performance vs class average, exam-wise + subject-wise.</p>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                    <span className="text-sm font-semibold text-gray-600">Overall Score:</span>
                    <span className="text-2xl font-bold text-primary leading-none">36.7%</span>
                    <span className="text-xs text-gray-500 self-end mb-0.5">Class avg: 2.2%</span>
                </div>
            </div>

            {/* Rank Scrolling Section */}
            <div className="mb-6">
                <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-100/50">
                    <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold text-gray-800">Exam-wise Rank Timeline</h4>
                        <p className="text-xs text-gray-400 hidden sm:block">Scroll to view history</p>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {rankData.map((item, index) => {
                            let rankStyle = "bg-blue-50 text-primary";
                            if (item.rank === 1) rankStyle = "bg-yellow-100 text-yellow-700";
                            if (item.rank === 2) rankStyle = "bg-gray-100 text-gray-700";

                            return (
                                <div key={index} className="flex items-center gap-3 bg-white border border-gray-200 rounded-md px-3 py-2 min-w-[160px] shadow-sm">
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${rankStyle}`}>RANK {item.rank}</span>
                                    <span className="text-sm font-semibold text-gray-700 truncate">{item.exam}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-[300px]">
                {/* Main Exam Trend Chart */}
                <div className="flex-[2] flex flex-col min-h-[250px]">
                    <h5 className="text-sm font-bold text-gray-700 mb-4 pl-2 border-l-4 border-primary">Exam Trend Analysis</h5>
                    <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={examTrendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorStudentExam" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#004c6d" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#004c6d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="exam"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                    dy={10}
                                    interval="preserveStartEnd"
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
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', color: '#374151' }} />
                                <Line
                                    type="monotone"
                                    dataKey="avg"
                                    name="Class Avg"
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
                                    fill="url(#colorStudentExam)"
                                    dot={{ r: 4, fill: '#004c6d', strokeWidth: 0 }}
                                    activeDot={{ r: 7 }}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Subject Wise Chart */}
                <div className="flex-1 flex flex-col min-h-[250px] border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-8 pt-6 lg:pt-0">
                    <h5 className="text-sm font-bold text-gray-700 mb-4 pl-2 border-l-4 border-secondary">Subject Performance</h5>
                    <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={subjectData} barSize={12} layout="vertical" margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} stroke="#f3f4f6" />
                                <XAxis type="number" hide domain={[0, 100]} />
                                <YAxis
                                    dataKey="subject"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 11 }}
                                    width={30}
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
                                <Bar
                                    dataKey="score"
                                    fill="#004c6d"
                                    radius={[0, 4, 4, 0]}
                                    name="Score"
                                    background={{ fill: '#f3f4f6', radius: [0, 4, 4, 0] }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-400">
                    Exam-wise chart is based on the latest exams for the class.
                </p>
            </div>
        </div>
    );
};
