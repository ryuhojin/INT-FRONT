import { GetServerSideProps } from "next";
import service from "../../api";
import { selectIssue } from "../../api/modules/issue";
import Seo from "../../components/common/Seo";
import HeaderContainer from "../../containers/base/HeaderContainer";
import DetailContainer from "../../containers/detail/DetailContainer";
import NFLayout from "../../layouts/NFLayout";

const Detail = ({ detail }: any) => {
    return <>
        <Seo title={detail.title}
            contents={detail.content.replace(/(<([^>]+)>)/gi, "").substring(0, 50)} />
        <NFLayout header={<HeaderContainer />} body={<DetailContainer detail={detail}/>} />
    </>
}

export default Detail;

export const getServerSideProps: GetServerSideProps = async (props) => {
    service.defaults.headers.common["access-token"] = props.req.cookies.userId
    const id = Number(props.query.id);
    const { data } = await selectIssue(id);
    return {
        props: {
            detail: data,
        },
    };
};
