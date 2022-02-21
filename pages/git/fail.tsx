import Router from "next/router";
import { useEffect } from "react";
const Fail = () => {
  useEffect(() => {
    Router.push("/");
  }, []);
  return <></>;
};
export default Fail;
