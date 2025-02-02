import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

function ChartPageView(){
    return (
        <Box sx={{width:'100%'}}>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                            { id: 3, value: 25, label: 'series D' },
                        ],
                        innerRadius: 35,
                        paddingAngle: 1,
                        cornerRadius: 5,
                        highlightScope: { fade: 'global', highlight: 'item' },
                    }
                ]}  
                slotProps={{
                    legend: {
                      padding: 1,
                    },
                  }}
                width={250}
                height={150}
            />
        </Box>
    )
}


// const desktopOS = [
//     {
//       label: 'Windows',
//       value: 72.72,
//     },
//     {
//       label: 'OS X',
//       value: 16.38,
//     },
//     {
//       label: 'Linux',
//       value: 3.83,
//     },
//     {
//       label: 'Chrome OS',
//       value: 2.42,
//     },
//     {
//       label: 'Other',
//       value: 4.65,
//     },
//   ];

//   const valueFormatter = (item) => `${item.value}%`;

//   function ChartPageView(){
//     return (
//         <Box sx={{width:'100%'}}>
//             <PieChart
//                 series={[
//                     {
//                     arcLabel: (item) => `${item.value}%`,
//                     arcLabelMinAngle: 35,
//                     arcLabelRadius: '60%',
//                     innerRadius: 20,
//                     outerRadius: 100,
//                     paddingAngle: 2,
//                     cornerRadius: 4,
//                     ...data,
//                     },
//                 ]}
//                 sx={{
//                     [`& .${pieArcLabelClasses.root}`]: {
//                     fontWeight: 'bold',
//                     },
//                 }}
//                 {...size}
//             />
//         </Box>
//     )
// }

//   const size = {
//     width: 400,
//     height: 200,
//   };
  
//   const data = {
//     data: desktopOS,
//     valueFormatter,
//   };


export default ChartPageView;