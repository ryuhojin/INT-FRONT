import Router from "next/router";
import Card from "../../components/list/Card";

const CardContainer = ({ data }: any) => {
    const onDetail = () => {
        Router.push(`/issue/${data.id}`)
    }
    return <Card data={data} onDetail={onDetail}/>
}
export default CardContainer;