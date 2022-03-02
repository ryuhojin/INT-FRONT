import Router from "next/router";
import { useEffect } from "react";
const GitLoginFail = () => {
  useEffect(() => {
    Router.push("/");
  }, []);
  return <></>;
};
export default GitLoginFail;
