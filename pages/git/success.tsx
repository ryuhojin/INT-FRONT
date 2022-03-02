import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { cookie } from "utils/common";
import { useAuth } from "utils/auth";
const GitLoginSuccess = () => {
  const { query } = useRouter();
  const auth = useAuth();
  useEffect(() => {
    if (query.token) {
      cookie.setCookie("access-token", String(query.token));
      auth.signre();
      Router.push("/");
    }
  }, [query.token]);
  return <></>;
};
export default GitLoginSuccess;
