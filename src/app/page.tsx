"use client";
// import Button from "@/component/Button";
import Image from "next/image";

export default function MainHome() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* 헤더: 전체 너비로 패딩 제거 */}
      <div className="w-full max-w-[900px] flex justify-between items-center py-4 text-black px-5">
        <Image
          src="/images/kiscali.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[88px] h-7 shrink-0"
        />
        <Image
          src="/icons/menu.png"
          alt="menu"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>

      {/* 메인 콘텐츠: 패딩 포함 */}
      <div className="flex flex-col items-center gap-5 bg-gray-100 flex-1 w-full px-4 max-w-[900px]">
        {/* 섹션 1 */}
        <div className="w-[328px] h-[229px] shrink-0 [background:var(--Gray08,#FAFAFA)] rounded-[50px_200px_28px_28px]">
          <div className="flex flex-row items-center w-full text-black">
            <span className="text-[24px] font-bold pl-6">
              박정수님, <br />
              안녕하세요
            </span>
            <Image
              src="/images/people.png"
              alt="people"
              width={100}
              height={100}
              className="w-[152px] h-32 shrink-0 ml-auto"
            />
          </div>
          <div className="flex flex-col items-start w-full text-black ml-5 mt-5">
            <div className="flex items-center gap-1 w-[74px] h-7 shrink-0 [background:var(--Sub02,#952168)] rounded-3xl px-2">
              <Image
                src="/icons/bell.png"
                alt="bell"
                width={30}
                height={30}
                className="w-7 h-7"
              />
              <span className="text-[color:var(--White,#FFF)] [font-family:Pretendard] text-[15px] font-bold leading-[140%]">
                알림
              </span>
            </div>
            <div className="pl-2 text-black mt-2 text-base font-normal">
              알림이 없습니다.
            </div>
          </div>
        </div>

        {/* 환급 신청 영역 */}
        <div className="flex flex-col gap-5 w-full mt-5 mb-5">
          {/* 버튼 */}
          <div className="flex h-[87px] items-center justify-start w-full bg-[#006F83] px-6 py-5 rounded-[28px] ">
            <span className="text-white text-lg font-bold leading-[140%]">
              환급신청 바로가기
            </span>
            <Image
              src="/icons/right_arrow_white.png"
              alt="right_arrow"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <Image
              src="/images/document.png"
              alt="document"
              width={53}
              height={47}
              className="w-[53px] h-[47px] ml-auto"
            />
          </div>

          {/* 환급 내역 박스 */}
          <div className="w-full min-h-[266px] bg-white flex flex-col gap-5 pt-6 pb-5 px-4 rounded-[28px]">
            <div className="flex justify-between items-center self-stretch text-black">
              <span className="text-[color:var(--Gray01,#222)] [font-family:Pretendard] text-lg font-bold leading-[140%]">
                환급 신청 내역
              </span>
              <Image
                src="/icons/right_arrow_black.png"
                alt="right_arrow"
                width={24}
                height={24}
                className="w-6 h-6 text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2.5 self-stretch pl-[66px] pr-[65px] pt-[15px] pb-6">
              <Image
                src="/images/empty_box.png"
                alt="empty_box"
                width={100}
                height={100}
                className="w-[75px] h-[106px] aspect-[75/106]"
              />
              <span className="text-[color:var(--Gray03,#757575)] [font-family:Pretendard] text-base font-normal leading-[140%]">
                환급신청내역이 없습니다
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터: 전체 너비로 패딩 제거 */}
      <div className="w-full max-w-[900px] flex flex-col justify-center items-center gap-2.5 py-10 text-black">
        <span className="text-[color:var(--Gray02,#595959)] text-center [font-family:Pretendard] text-sm font-normal leading-[140%]">
          (주)에임메드 ㅣ 서울시 강남구 도산대로 221, 3,4층
        </span>
        <span className="text-[color:var(--Gray02,#595959)] text-center [font-family:Pretendard] text-sm font-normal leading-[140%]">
          TEL : 02-2156-6961
        </span>
      </div>
    </div>
  );
}
