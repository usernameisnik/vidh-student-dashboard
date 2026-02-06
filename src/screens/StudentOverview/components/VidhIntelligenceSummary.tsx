import clsx from 'clsx';
import { Sparkles } from 'lucide-react';

export const VidhIntelligenceSummary = (): JSX.Element => {
    const score = 88;
    const maxScore = 100;

    // Simple status helper
    const getStatus = (val: number) => {
        if (val >= 80) return { text: 'Excellent', color: 'text-green-600' };
        if (val >= 60) return { text: 'Good', color: 'text-secondary' };
        return { text: 'Average', color: 'text-incompletionRed' };
    };

    const status = getStatus(score);

    return (
        <div className="flex flex-col gap-4 h-full justify-center">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-tight">Vidh Intelligence Summary</h3>

            <div className="flex items-center gap-8">
                {/* Score Big Number */}
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[80px]">
                    <span className="text-5xl font-bold text-gray-900 leading-none">{score}%</span>
                    <span className={clsx("text-sm font-bold mt-2 uppercase tracking-wide", status.color)}>
                        {status.text}
                    </span>
                </div>

                {/* Breakdown */}
                <div className="flex flex-col gap-1.5 text-sm flex-1">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Attendance</span>
                        <span className="text-primary font-bold text-right">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Homework</span>
                        <span className="text-secondary font-bold text-right">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Exams</span>
                        <span className="text-primary font-bold text-right">95%</span>
                    </div>
                </div>
            </div>

            <div className="mt-2 p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex gap-3 items-start">
                <Sparkles className="w-5 h-5 text-blue-600 mt-0.5 shrink-0 fill-blue-100" />
                <p className="text-sm text-gray-700 leading-relaxed">
                    Sarah performs exceptionally well in STEM subjects with consistent improvement. Recommended to focus on language arts assignments.
                </p>
            </div>
        </div>
    );
};
