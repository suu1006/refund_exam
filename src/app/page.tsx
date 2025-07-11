export default function MainHome() {
  return (
    <div className="bg-gray-100">
      <div className="flex w-[360px] justify-between items-center px-5 py-3 bg-gray-100 text-black">
        로고영역
      </div>
      <div className="flex w-[328px] h-[680px] flex-col items-start gap-5 mx-[16px] bg-gray-100 mt-3.5">
        <div className="w-[328px] h-[229px] shrink-0 [background:var(--Gray08,#FAFAFA)] rounded-[50px_200px_28px_28px]">
          섹션1
        </div>
        <div className="flex w-[328px] flex-col items-start gap-5 mt-5 mb-5 ">
          <div className="flex h-[87px] items-center self-stretch [background:var(--Main,#006F83)] px-8 py-5 rounded-[28px]">
            <span className="text-[color:var(--White,#FFF)] [font-family:Pretendard] text-lg font-bold leading-[140%]">
              환급 신청 바로가기
            </span>
          </div>
          <div className="w-[328px] h-[304px] flex flex-col items-start gap-5 self-stretch [background:var(--White,#FFF)] pt-6 pb-5 px-4 rounded-[28px]">
            <div className="flex justify-between items-center self-stretch text-black">
              환급 신청 내역
            </div>
            <div className="flex flex-col items-center gap-2.5 self-stretch pl-[66px] pr-[65px] pt-[15px] pb-6 text-black">
              환급신청내역이 없습니다
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[360px] flex-col justify-center items-center gap-2.5 px-5 py-10 bg-gray-100 text-black">
        푸터 영역
      </div>
    </div>
  );
}
