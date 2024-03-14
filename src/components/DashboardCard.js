import React from 'react';

const DashboardCard = ({item}) => {
  
  return (
    <div className="card mt-5 relative top-35 left-10 rounded-lg w-[274px] h-44 bg-white-100 shadow-lg border cursor-pointer">
      <div className={`icon absolute top-[-35px] left-8 w-[60px] h-[60px] rounded-lg bg-[#2d3748] py-[13px] px-[18px]`} >
        <item.icon className='w-[25px] h-[37px] rounded-md text-white'/>
        
      </div>
      <div className="title absolute top-[23px] left-[91px] text-lg font-bold text-gray-300 uppercase">
        <p>{item.title}</p>
      </div>
      <div className="amount absolute top-[45px] left-[89px] text-4xl ">{item.value}</div>
      <div className="iconside absolute bottom-2 left-5">
      <item.icon className='w-[50px] h-[50px] text-gray-300 rounded-md'/>
      </div>
    </div>

      );
};

export default DashboardCard;