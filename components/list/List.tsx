import CardContainer from "../../containers/list/CardContainer";
import Card from "./Card";

const List = ({ list }: any) => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-4">
        {list.map((v: any, index: any) => {
          return <CardContainer key={index} data={v} index={v.id} />
        })}
      </div>
    </>
  );
};
export default List;
