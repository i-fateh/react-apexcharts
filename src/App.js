import React, {useEffect, useState} from 'react'
import './App.css';
import Bars from './components/Bars'
import Donut from './components/Donut'
import Radar from './components/Radar';
import Line from './components/Line'
import Horizontal from './components/Horizontal'
import Radial from './components/Radial';
import CountUp from 'react-countup';

function App() {

  const [data1, setData1] = useState(0)
  const [data2, setData2] = useState(0)
  const [data3, setData3] = useState(0)
  const [data4, setData4] = useState(0)

  useEffect(() => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const interval = setInterval(() => {
      setData1(getRandomInt(100))
      setData2(getRandomInt(100))
      setData3(getRandomInt(100))
      setData4(getRandomInt(100))
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
 
      <header className={'flex justify-between items-center pt-4 headMedia'}>
        <div>
        <h1 className='text-4xl lg:text-5xl ml-10 font-semibold text-left'>ApexCharts / React</h1>
        <p className='text-xl lg:text-3xl font-thin ml-10 xs:text-white'>with random data [{<CountUp duration={1} end={data1} />} / {<CountUp end={data2} />} / {<CountUp end={data3} />} / {<CountUp end={data4} />}]</p>
        </div>
        <div className='flex'>
          <a href='https://www.linkedin.com/in/fatehelboucherour/' rel="noreferrer" target={"_blank"}><img src='../logo-linkedin.png' className='h-12 w-12 icon' alt='' /></a>
          {/* <a href='' rel="noreferrer" target={"_blank"}><img src='../logo-github.jpg' className='mr-1 h-12 w-12 icon' alt='' /></a> */}
          <img src='../fateh.png' className='mr-8 w-12 h-12' alt='' />
        </div>
      </header>

      <div class="boxGraph">
        <div className='m-2'><Bars/></div>
        <div className='m-2'><Donut/></div>
        <div className='m-2'><Radar/></div>
      </div>
              
      <div class="boxGraph">
      <div className='m-2'><Line/></div>
        <div className='m-2'><Horizontal/></div>
        <div className='m-2'><Radial/></div>
      </div>
        
    </div>
  );
}

export default App;
