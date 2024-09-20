import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Community', team: 80 },
    { name: 'Courses', team: 78 },
    { name: 'Tutorials', team: 70 },
    { name: 'Problems', team: 67 },
    { name: 'Solutions', team: 65 }
];

const colors = [
    'rgba(239,216,29,0.9)',
    'rgba(49,105,148,0.9)',
    'rgba(234,140,16,0.9)',
    'rgba(42,1,100,0.9)',
    'rgba(115,119,173,0.9)'
];

import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-black p-2 rounded text-white">
                <p className="label font-bold text-sm text-green-500">{label}</p>
            </div>
        );
    }
    return null;
};

const Community: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={120}>
            <BarChart
                data={[{ name: 'Community', Community: 80 }]}
                layout="vertical"
                margin={{ top: 20, right: 5, left: 30, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} itemStyle={{ color: colors[0] }} />
                <Legend />
                <Bar dataKey="Community" fill="rgba(239,216,29,0.9)">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const Courses: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={120}>
            <BarChart
                data={[{ name: 'Courses', Courses: 78 }]}
                layout="vertical"
                margin={{ top: 20, right: 5, left: 30, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} itemStyle={{ color: colors[1] }} />
                <Legend />
                <Bar dataKey="Courses" fill={colors[1]}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[1]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const Tutorials: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={120}>
            <BarChart
                data={[{ name: 'Tutorials', Tutorials: 70 }]}
                layout="vertical"
                margin={{ top: 20, right: 5, left: 30, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} itemStyle={{ color: colors[2] }} />
                <Legend />
                <Bar dataKey="Tutorials" fill={colors[2]}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[2]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const Problems: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={120}>
            <BarChart
                data={[{ name: 'Problems', Problems: 67 }]}
                layout="vertical"
                margin={{ top: 20, right: 5, left: 30, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} itemStyle={{ color: colors[3] }} />
                <Legend />
                <Bar dataKey="Problems" fill={colors[3]}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[3]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const Solutions: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={120}>
            <BarChart
                data={[{ name: 'Solutions', Solutions: 65 }]}
                layout="vertical"
                margin={{ top: 20, right: 5, left: 30, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} itemStyle={{ color: colors[4] }} />
                <Legend />
                <Bar dataKey="Solutions" fill={colors[4]}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[4]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const Chart: React.FC = () => {
    return (
        <>
            <h2 className="text-transparent mt-4">Join our Dynamic team to learn and succeed.</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="team" fill="rgb(51, 212, 91)">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export { Chart, Community, Courses, Tutorials, Problems, Solutions };
