import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { cookie } from "utils/common";
import { useAuth } from "utils/auth";
const success = () => {
  const { query } = useRouter();
  const auth = useAuth();
  useEffect(() => {
    cookie.setCookie("access-token", String(query.token));
    auth.signre();
    Router.push("/");
  });
  return <></>;
};
export default success;
