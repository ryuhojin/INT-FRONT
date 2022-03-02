import { GetServerSideProps } from "next";
import service from "api";
import { selectIssue } from "api/modules/issue";
import Seo from "src/components/common/Seo";

import FooterContainer from "src/containers/common/FooterContainer";
import HeaderContainer from "src/containers/common/HeaderContainer";
import DetailContainer from "src/containers/issue/DetailContainer";
import MainLayout from "src/layouts/MainLayout";

const IssueDetailPage = ({ detail }: any) => {
  return (
    <>
      <Seo
        title={detail.title}
        contents={detail.content.replace(/(<([^>]+)>)/gi, "").substring(0, 50)}
      />
      <MainLayout
        header={<HeaderContainer />}
        home={<DetailContainer detail={detail} />}
        footer={<FooterContainer />}
      />
    </>
  );
};
export default IssueDetailPage;

export const getServerSideProps: GetServerSideProps = async (props) => {
  if (props.req.cookies.userId) {
    service.defaults.headers.common["userId"] = props.req.cookies.userId;
  }
  const id = Number(props.query.id);
  const { data } = await selectIssue(id);
  return {
    props: {
      detail: data,
    },
  };
};
