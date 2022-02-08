const Card = () => {
  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 mb-2 px-6 py-4 bg-white shadow-cusblue-light border border-l-4 border-l-red-400 rounded-xl">
        <span className="text-md font-bold line-clamp-1">가나다라 마바사아 자차카타파하 자차카타파하 자차카타파하 제목입니다 가나다라마바사. </span>
        <span className="text-sm line-clamp-2 mt-2">안녕하세요. 이것은 내용입니다. 테스트 해볼려고 이렇게 썻습니다.이것은 내용입니다. 테스트 해볼려고 이렇게 썻습니다.이것은 내용입니다. 테스트 해볼려고 이렇게 썻습니다. 여러분은 이것에 대해서 어떻게 생각하시나요? </span>
        <span className="flex justify-between mt-1 text-xs text-gray-400"><span>류호진</span><span>2 개의 솔루션</span></span>
        <span className="text-xs text-gray-400 self-center">2020.01.09</span>
      </div>
    </>
  );
};
export default Card;
