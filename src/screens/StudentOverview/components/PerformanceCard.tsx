import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const examData = [
    { subject: 'Math', student: 88, avg: 75 },
    { subject: 'Sci', student: 92, avg: 78 },
    { subject: 'Eng', student: 85, avg: 82 },
    { subject: 'Soc', student: 90, avg: 80 },
    { subject: 'Hin', student: 78, avg: 76 },
    { subject: 'Tel', student: 95, avg: 85 },
];

export const PerformanceCard = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState('unit');

    return (
        <div className="w-full bg-white rounded-lg border border-gray-100 p-6 flex flex-col gap-6 shadow-sm h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-900">Exam Performance</h3>

                <div className="flex bg-gray-100 p-1.5 rounded-lg w-full sm:w-auto">
                    <button
                        onClick={() => setActiveTab('slip')}
                        className={`flex-1 sm:flex-initial px-4 py-2.5 text-sm font-semibold rounded-md transition-all ${activeTab === 'slip'
                                ? 'bg-white text-gray-900 shadow-md'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        Slip Test
                    </button>
                    <button
                        onClick={() => setActiveTab('unit')}
                        className={`flex-1 sm:flex-initial px-4 py-2.5 text-sm font-semibold rounded-md transition-all ${activeTab === 'unit'
                                ? 'bg-white text-gray-900 shadow-md'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        Unit Exam
                    </button>
                    <button
                        onClick={() => setActiveTab('mid')}
                        className={`flex-1 sm:flex-initial px-4 py-2.5 text-sm font-semibold rounded-md transition-all ${activeTab === 'mid'
                                ? 'bg-white text-gray-900 shadow-md'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                    >
                        Mids
                    </button>
                </div>
            </div>

            <div className="flex-1 min-h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={examData} barSize={28} barGap={8} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            dataKey="subject"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 13, fontWeight: 500 }}
                            dy={8}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            domain={[0, 100]}
                            ticks={[0, 25, 50, 75, 100]}
                            dx={-5}
                        />
                        <Tooltip
                            cursor={{ fill: '#f9fafb' }}
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                padding: '8px 12px'
                            }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '24px' }}
                            iconType="circle"
                            iconSize={10}
                        />
                        <Bar
                            dataKey="student"
                            name="My Score"
                            fill="#E56300"
                            radius={[6, 6, 0, 0]}
                        />
                        <Bar
                            dataKey="avg"
                            name="Class Average"
                            fill="#d1d5db"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
