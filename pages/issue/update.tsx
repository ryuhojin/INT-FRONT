import Seo from "components/common/Seo"

import HeaderContainer from "containers/base/HeaderContainer"
import UpdateContainer from "containers/write/UpdateContainer"

import NFLayout from "layouts/NFLayout"

const IssueUpdatePage = (props:any) => {
    return <>
        <Seo title="이슈 수정" />
        <NFLayout header={<HeaderContainer />} body={<UpdateContainer />} />
    </>
}
export default IssueUpdatePage