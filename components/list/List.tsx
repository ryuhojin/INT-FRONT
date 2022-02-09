import Card from "./Card";

const List = ({ list }: any) => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-4">
        {list.map((v: any, index: any) => {
          return <Card key={index} data={v} index={v.id} />
        })}
      </div>
    </>
  );
};
export default List;
