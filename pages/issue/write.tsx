import Seo from "components/common/Seo"

import HeaderContainer from "containers/base/HeaderContainer"
import WriteContainer from "containers/write/WriteContainer"

import NFLayout from "layouts/NFLayout"

const IssueWritePage = () => {
    return <>
        <Seo title="이슈 등록" />
        <NFLayout header={<HeaderContainer />} body={<WriteContainer />} />
    </>
}
export default IssueWritePage