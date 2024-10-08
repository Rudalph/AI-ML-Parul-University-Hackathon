// "use client"
// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar} from 'recharts';
// import firestore from '@/Components/firebase'; // Assuming the correct path to firebase.js
// import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore"; 

// const Page = () => {
//   const [liveData, setLiveData] = useState([]); // State for live data updated every 5 seconds
//   const [historicalData, setHistoricalData] = useState([]); // State for data fetched from Firestore
//   const [counter, setCounter] = useState(0);
//   const [spo2Sum, setSPO2Sum] = useState(0);
//   const [pulseRateSum, setPulseRateSum] = useState(0);

//   // Function to generate random SPO2 value between 95 to 100
//   const randomSPO2Generator = () => {
//     return Math.floor(Math.random() * (100 - 95 + 1)) + 95;
//   };

//   // Function to generate random Pulse Rate value between 60 to 100
//   const randomPulseRateGenerator = () => {
//     return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
//   };

//   // Function to fetch data from Firestore
//   const fetchData = async () => {
//     const dataCollection = collection(firestore, 'data');
//     const snapshot = await getDocs(dataCollection);
//     const fetchedData = [];
//     snapshot.forEach(doc => {
//       fetchedData.push(doc.data());
//     });
//     setHistoricalData(fetchedData);
//   };

//   // Fetch data when component mounts
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Function to update values after every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newSPO2 = randomSPO2Generator();
//       const newPulseRate = randomPulseRateGenerator();
//       const currentTime = new Date().toLocaleTimeString();
      
//       // Update state for live data
//       setLiveData(prevData => [...prevData, { time: currentTime, SPO2: newSPO2, PulseRate: newPulseRate }]);
//       setSPO2Sum(prevSum => prevSum + newSPO2);
//       setPulseRateSum(prevSum => prevSum + newPulseRate);
//       setCounter(prevCounter => prevCounter + 1);

//       // If 10 values are generated, calculate averages and store data in Firestore
//       if (counter === 9) {
//         const spo2Average = spo2Sum / 10;
//         const pulseRateAverage = pulseRateSum / 10;

//         const addDataToFirestore = async () => {
//           try {
//             await addDoc(collection(firestore, 'data'), {
//               SPO2: spo2Average,
//               PulseRate: pulseRateAverage,
//               timestamp: serverTimestamp()
//             });
//             console.log("Data added to Firestore");
//           } catch (error) {
//             console.error("Error adding data to Firestore: ", error);
//           }
//         };

//         addDataToFirestore();

//         // Reset counters and sums
//         setCounter(0);
//         setSPO2Sum(0);
//         setPulseRateSum(0);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [counter, spo2Sum, pulseRateSum]);

//   return (
//     <div className='mt-40 ml-4 md:mt-20 md:ml-20 lg:mt-40 lg:ml-72'>
//   <div className='mb-8'>
//     <h2 className='text-lg md:text-2xl lg:text-3xl mb-4'>Live Data</h2>
//     <div className='overflow-x-auto'>
//       <LineChart
//         width={800}
//         height={400}
//         data={liveData}
//         // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         className='w-full md:w-auto'
//       >
//         <CartesianGrid strokeDasharray='none' vertical="false" />
//         <XAxis dataKey='time' />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type='monotone' dataKey='SPO2' stroke='#8884d8' strokeWidth={3}/>
//         <Line type='monotone' dataKey='PulseRate' stroke='#82ca9d' strokeWidth={3}/>
//       </LineChart>
//     </div>
//   </div>
//   <div>
//     <h2 className='text-lg md:text-2xl lg:text-3xl mb-4'>Historical Data</h2>
//     <div className='overflow-x-auto'>
//       <BarChart
//         width={800}
//         height={400}
//         data={historicalData}
//         // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         className='w-full md:w-auto'
//       >
//         <CartesianGrid strokeDasharray='none' vertical="false" />
//         <XAxis dataKey='timestamp' />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey='SPO2' fill='#8884d8' barSize={30} radius={[5, 5, 5, 5]}/>
//         <Bar dataKey='PulseRate' fill='#82ca9d' barSize={30} radius={[5, 5, 5, 5]}/>
//       </BarChart>
//     </div>
//   </div>
// </div>

//   );
// };

// export default Page;



"use client";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import firestore from '@/Components/firebase'; // Assuming the correct path to firebase.js
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore"; 

const Page = () => {
  const [liveData, setLiveData] = useState([]); // State for live data updated every 5 seconds
  const [historicalData, setHistoricalData] = useState([]); // State for data fetched from Firestore
  const [counter, setCounter] = useState(0);
  const [spo2Sum, setSPO2Sum] = useState(0);
  const [pulseRateSum, setPulseRateSum] = useState(0);
  const [temperatureSum, setTemperatureSum] = useState(0);

  // Function to generate random SPO2 value between 95 to 100
  const randomSPO2Generator = () => {
    return Math.floor(Math.random() * (100 - 95 + 1)) + 95;
  };

  // Function to generate random Pulse Rate value between 60 to 100
  const randomPulseRateGenerator = () => {
    return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  };

  // Function to generate random Body Temperature value between 36.1°C to 37.2°C
  const randomTemperatureGenerator = () => {
    return (Math.random() * (50 - 30) + 30).toFixed(1); // Generates a number between 30 and 50
  };

  // Function to fetch data from Firestore
  const fetchData = async () => {
    const dataCollection = collection(firestore, 'data');
    const snapshot = await getDocs(dataCollection);
    const fetchedData = [];
    snapshot.forEach(doc => {
      fetchedData.push(doc.data());
    });
    setHistoricalData(fetchedData);
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to update values after every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newSPO2 = randomSPO2Generator();
      const newPulseRate = randomPulseRateGenerator();
      const newTemperature = randomTemperatureGenerator();
      const currentTime = new Date().toLocaleTimeString();
      
      // Update state for live data
      setLiveData(prevData => [...prevData, { time: currentTime, SPO2: newSPO2, PulseRate: newPulseRate, Temperature: newTemperature }]);
      setSPO2Sum(prevSum => prevSum + newSPO2);
      setPulseRateSum(prevSum => prevSum + newPulseRate);
      setTemperatureSum(prevSum => prevSum + parseFloat(newTemperature));
      setCounter(prevCounter => prevCounter + 1);

      // If 10 values are generated, calculate averages and store data in Firestore
      if (counter === 9) {
        const spo2Average = spo2Sum / 10;
        const pulseRateAverage = pulseRateSum / 10;
        const temperatureAverage = temperatureSum / 10;

        const addDataToFirestore = async () => {
          try {
            await addDoc(collection(firestore, 'data'), {
              SPO2: spo2Average,
              PulseRate: pulseRateAverage,
              Temperature: temperatureAverage,
              timestamp: serverTimestamp()
            });
            console.log("Data added to Firestore");
          } catch (error) {
            console.error("Error adding data to Firestore: ", error);
          }
        };

        addDataToFirestore();

        // Reset counters and sums
        setCounter(0);
        setSPO2Sum(0);
        setPulseRateSum(0);
        setTemperatureSum(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [counter, spo2Sum, pulseRateSum, temperatureSum]);

  return (
    <div className='mt-40 ml-4 md:mt-20 md:ml-20 lg:mt-40 lg:ml-72'>
      <div className='mb-8'>
        <h2 className='text-lg md:text-2xl lg:text-3xl mb-4'>Live Data</h2>
        <div className='overflow-x-auto'>
          <LineChart
            width={800}
            height={400}
            data={liveData}
            // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            className='w-full md:w-auto'
          >
            <CartesianGrid strokeDasharray='none' vertical="false" />
            <XAxis dataKey='time' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='SPO2' stroke='#8884d8' strokeWidth={3}/>
            <Line type='monotone' dataKey='PulseRate' stroke='#82ca9d' strokeWidth={3}/>
            <Line type='monotone' dataKey='Temperature' stroke='#ff7300' strokeWidth={3}/>
          </LineChart>
        </div>
      </div>
      <div>
        <h2 className='text-lg md:text-2xl lg:text-3xl mb-4'>Historical Data</h2>
        <div className='overflow-x-auto'>
          <BarChart
            width={800}
            height={400}
            data={historicalData}
            // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            className='w-full md:w-auto'
          >
            <CartesianGrid strokeDasharray='none' vertical="false" />
            <XAxis dataKey='timestamp' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='SPO2' fill='#8884d8' barSize={30} radius={[5, 5, 5, 5]}/>
            <Bar dataKey='PulseRate' fill='#82ca9d' barSize={30} radius={[5, 5, 5, 5]}/>
            <Bar dataKey='Temperature' fill='#ff7300' barSize={30} radius={[5, 5, 5, 5]}/>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Page;




