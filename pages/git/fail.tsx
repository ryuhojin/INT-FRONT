import Router from "next/router";
import { useEffect } from "react";
const fail = () => {
  useEffect(() => {
    Router.push("/");
  });
  return <></>;
};
export default fail;
