// import React from 'react'
// import { PieChart, Pie, Legend, Tooltip, BarChart, CartesianGrid, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';


// const PieChart1 = () => {

//   const data1 = [
//     { name: "totalSales",  value: 150 },
//     { name: "totalBooks",  value: 4800 },
//     { name: "averagePrice", value: 950 },
//     { name: "totalOrders",value: 250 }
//   ]

//   const data2 = [
//     { name: "Fiction", value: 100 },
//     { name: "Mystery", value: 40 },
//     { name: "programming", value: 90 },
//     { name: "Horror", value: 10 },
//     { name: "History", value: 100 },
//     { name: "Autobiography", value: 210 },
//     { name: "Business", value: 150 },
//     { name: "Religion", value: 50 },
//     { name: "Art and Design", value: 80 }
//   ]

//   const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//     ${x + width / 2}, ${y}
//     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//     Z`;
//   };

// // BarChart

//    const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;
//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };
//   const COLORS = ['#0088FE', '#b2432a', '#FFBB28', '#FF8042', '#2ab26e' , '#b2412a','#552ab2', '#aab22a', '#b22a74'];
  

//   const RADIAN = Math.PI / 180;

//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   return (
//     <>
//       <div className='flex sm:flex-col md:flex-row gap-5'>
       
//        <div className='w-1/2 '>
           
//           <BarChart
//             width={500}
//             height={300}
//             data={data1}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//               {data1.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </div>

//         <div className='w-1/2 flex flex-col'>
//         <div>
//          <PieChart width={400} height={200}>
//             <Pie
//               dataKey="value"
//               isAnimationActive={false}
//               data={data1}
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#0cc8b9"
//               label
//             />
//             <Tooltip />
//           </PieChart>
//           </div>

//           {/* pie chart 2 */}

//           <div className='ps-10 border-t-4'>
//         <PieChart width={400} height={200}>
//           <Pie
//             data={data2}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data2.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//         <h2 className='font-bold text-center text-xl'>No. of Books Sales</h2>            

//           </div>
//         </div>

//       </div>


//     </>
//   )
// }

// export default PieChart1

import React from 'react';
import { PieChart, Pie, Legend, Tooltip, BarChart, CartesianGrid, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const PieChart1 = () => {

  const data1 = [
    { name: "totalSales",  value: 150 },
    { name: "totalBooks",  value: 4800 },
    { name: "averagePrice", value: 950 },
    { name: "totalOrders", value: 250 }
  ];

  const data2 = [
    { name: "Fiction", value: 100 },
    { name: "Mystery", value: 40 },
    { name: "Programming", value: 90 },
    { name: "Horror", value: 10 },
    { name: "History", value: 100 },
    { name: "Autobiography", value: 210 },
    { name: "Business", value: 150 },
    { name: "Religion", value: 50 },
    { name: "Art and Design", value: 80 }
  ];

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  // BarChart

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const COLORS = ['#0088FE', '#b2432a', '#FFBB28', '#FF8042', '#2ab26e', '#b2412a', '#552ab2', '#aab22a', '#b22a74'];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data1}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='w-full'>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data1}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#0cc8b9"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* pie chart 2 */}
          <div className='ps-10 border-t-4 w-full'>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data2}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <h2 className='font-bold text-center text-xl'>No. of Books Sales</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChart1;
