import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart,  Tooltip, XAxis, YAxis } from 'recharts';
import useGraphData from '../../Hook/useGraphData/useGraphData';


const Dashboard = () => {
    const [graphData] = useGraphData();
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16 mx-12 my-10  justify-items-center'>
            <div>
                <h1 className='text-3xl text-indigo-500 font-medium my-8'>Monthly Investment</h1>
                <LineChart width={400} height={400} data={graphData}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h1 className='text-3xl text-indigo-500 font-medium my-8'>Monthly Revenue</h1>
                <AreaChart width={400} height={400} data={graphData}>                
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
            <div>
                <h1 className='text-3xl text-indigo-500 font-medium my-8'>Sell per Month</h1>
                    <BarChart width={400} height={400} data={graphData}>
                    <Bar dataKey="sell" fill="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    </BarChart>
            </div>
            <div>
                <h1 className='text-3xl text-indigo-500 font-medium my-8'>Investment vs Revenue</h1>
                <PieChart width={400} height={400}>
                    <Pie data={graphData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={graphData} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;