const NFLayout = ({
  header,
  body,
}: {
  header: Element | any;
  body?: Element | any;
}) => {
  return (
    <>
      <div className="w-full h-screen">
        {header}
        <div className="conatiner w-full px-4 mx-auto">{body}</div>
      </div>
    </>
  );
};
export default NFLayout;
