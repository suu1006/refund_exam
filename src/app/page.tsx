export default function MainHome() {
  return (
    <div className="bg-gray-100 mx-auto px-4 max-w-[900px] min-h-screen flex flex-col">
      {/* 헤더 */}
      <div className="flex w-full justify-between items-center py-4 text-black">
        로고영역
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-col items-center gap-5 bg-gray-100 mt-6 flex-1">
        {/* 섹션 1 */}
        <div className="w-full h-[229px] bg-[#FAFAFA] rounded-[50px_200px_28px_28px]">
          섹션1
        </div>

        {/* 환급 신청 영역 */}
        <div className="flex flex-col gap-5 w-full mt-5 mb-5">
          {/* 버튼 */}
          <div className="flex h-[87px] items-center justify-center w-full bg-[#006F83] px-6 py-5 rounded-[28px]">
            <span className="text-white text-lg font-bold leading-[140%]">
              환급 신청 바로가기
            </span>
          </div>

          {/* 환급 내역 박스 */}
          <div className="w-full min-h-[266px] bg-white flex flex-col gap-5 pt-6 pb-5 px-4 rounded-[28px]">
            <div className="flex justify-between items-center w-full text-black">
              환급 신청 내역
            </div>
            <div className="flex flex-col items-center gap-2.5 w-full text-black">
              환급신청내역이 없습니다
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="flex flex-col justify-center items-center gap-2.5 py-10 text-black w-full">
        푸터 영역
      </div>
    </div>
  );
}
