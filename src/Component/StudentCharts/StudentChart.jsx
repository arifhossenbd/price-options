// import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, AreaChart, Area, Tooltip, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';

const StudentChart = () => {
    const studentMarks = [
        { id: 1, name: "John Smith", math: 85, science: 78, history: 92, english: 88 },
        { id: 2, name: "Alice Johnson", math: 76, science: 89, history: 80, english: 95 },
        { id: 3, name: "David Brown", math: 90, science: 92, history: 78, english: 84 },
        { id: 4, name: "Sarah Wilson", math: 68, science: 73, history: 65, english: 70 },
        { id: 5, name: "Emily Davis", math: 95, science: 88, history: 91, english: 96 },
        { id: 6, name: "Michael Lee", math: 82, science: 76, history: 89, english: 87 },
        { id: 7, name: "Sophia Anderson", math: 78, science: 84, history: 77, english: 81 },
        { id: 8, name: "Liam Martinez", math: 89, science: 91, history: 86, english: 93 },
        { id: 9, name: "Olivia Johnson", math: 72, science: 69, history: 75, english: 71 },
        { id: 10, name: "Ethan Taylor", math: 87, science: 90, history: 88, english: 94 }
    ];

    // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({
    //     cx,
    //     cy,
    //     midAngle,
    //     innerRadius,
    //     outerRadius,
    //     percent,
    //     index
    // }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);


        return (
            <div className='mt-24'>
                {/* <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                >
                    {`${(percent * 100).toFixed(0)}%`}
                </text> */}
                <h2 className='gap-5'>
                    Students Name: {studentMarks.name}
                </h2>
                <LineChart width={500} height={400} data={studentMarks}>
                    <Line type="monotone" dataKey="math" stroke="red" />
                    <Line type="monotone" dataKey="science" stroke="black" />
                    <Line type="monotone" dataKey="history" stroke="blue" />
                    <Line type="monotone" dataKey="english" stroke="aqa" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>

                <div>
                    <LineChart width={600} height={300} data={studentMarks}>
                        <Line type="monotone" dataKey="math" stroke="red" />
                        <Line type="monotone" dataKey="science" stroke="black" />
                        <Line type="monotone" dataKey="history" stroke="blue" />
                        <Line type="monotone" dataKey="english" stroke="aqa" />                    <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={studentMarks}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="math" stroke="orange" fill="green" />
                    </AreaChart>
                </div>
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={studentMarks}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="math" stackId="name" fill="red" />
                        <Bar dataKey="english" stackId="name" fill="black" />
                        <Bar dataKey="history" stackId="name" fill="blue" />
                        <Bar dataKey="science" stackId="name" fill="orange" />
                    </BarChart>
                </div>

                <div>
                    {/* <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart> */}
                </div>

            </div>
        )

    }

    // StudentChart.propTypes = {
    //     LineChart:PropTypes.array
    // };

    export default StudentChart