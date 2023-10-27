'use client';

import { getSLSSessions } from '@/app/actions/getSLSData';
import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
	{
		name: 'Jan',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Feb',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Mar',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Apr',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'May',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Jun',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Jul',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Aug',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Sep',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Oct',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Nov',
		total: Math.floor(Math.random() * 5000) + 1000
	},
	{
		name: 'Dec',
		total: Math.floor(Math.random() * 5000) + 1000
	}
];
interface OverviewProps {
	analytics: any;
}

export function Overview({ analytics }: OverviewProps) {
	const [nData, setNData] = useState<any>();
	useEffect(() => {
		const ses = async () => {
			const d = await getSLSSessions();
			return d;
		};
		setNData(ses);
		console.log(ses, 'ses');
	}, []);

	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart data={data}>
				<XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `$${value}`}
				/>
				<Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
			</BarChart>
		</ResponsiveContainer>
	);
}
