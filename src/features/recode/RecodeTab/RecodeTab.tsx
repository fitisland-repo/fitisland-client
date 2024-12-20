import React from 'react';

const RecodeTab = () => {
  return (
    <div className="bg-[#1A1A1A] mb-6">
      <p className="py-[16px] font-medium text-[18px] text-center">2024년 12월 20일</p>
      <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className="tab ab-active !border-primary text-primary">
          운동 기록
        </a>
        <a role="tab" className="tab text-[#6C6C6C]">
          신체 데이터
        </a>
      </div>
    </div>
  );
};

export default RecodeTab;