import { TrendingUp } from 'lucide-react';

const monthlyProgress = [
    { month: 'Jun', completed: 85 },
    { month: 'Jul', completed: 92 },
    { month: 'Aug', completed: 88 },
    { month: 'Sep', completed: 96 },
    { month: 'Oct', completed: 90 },
    { month: 'Nov', completed: 96 },
];

export const HomeworkCard = (): JSX.Element => {
    const currentRate = 96;
    const previousRate = 93.6;
    const change = currentRate - previousRate;
    const changePercent = ((change / previousRate) * 100).toFixed(1);

    return (
        <div className="w-full bg-white rounded-lg border border-gray-100 p-6 flex flex-col gap-6 shadow-sm h-full">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-900">Homework</h3>
                <p className="text-sm text-gray-500 font-medium">Completion Rate</p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                    <h2 className="text-6xl font-bold text-vidh-orange tracking-tight">{currentRate}%</h2>
                    <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1.5 rounded-lg border border-green-200">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-700 font-bold">+{changePercent}%</span>
                    </div>
                </div>
                <p className="text-sm text-gray-500">vs last month ({previousRate}%)</p>
            </div>

            {/* Monthly Progress Visualization */}
            <div className="flex flex-col gap-3 mt-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Monthly Trend</p>
                <div className="flex items-end justify-between gap-1.5 h-24">
                    {monthlyProgress.map((item, index) => {
                        const height = (item.completed / 100) * 100;
                        const isLatest = index === monthlyProgress.length - 1;
                        return (
                            <div key={item.month} className="flex flex-col items-center gap-2 flex-1">
                                <div className="w-full bg-gray-100 rounded-t-md overflow-hidden flex items-end" style={{ height: '80px' }}>
                                    <div
                                        className={`w-full rounded-t-md transition-all ${isLatest ? 'bg-vidh-orange' : 'bg-orange-300'
                                            }`}
                                        style={{ height: `${height}%` }}
                                    />
                                </div>
                                <span className={`text-xs font-medium ${isLatest ? 'text-gray-900' : 'text-gray-500'
                                    }`}>
                                    {item.month}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Completion Blocks */}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-medium">Last 20 Assignments</span>
                    <span className="text-gray-700 font-semibold">18/20 Completed</span>
                </div>
                <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className={`flex-1 h-2 rounded-sm transition-all ${i < 18 ? 'bg-vidh-orange' : 'bg-gray-200'
                                }`}
                            title={i < 18 ? 'Completed' : 'Pending'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
