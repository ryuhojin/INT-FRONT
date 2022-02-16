import Head from "next/head";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../store/atom";
import { useAuth } from "../../utils/auth";

const Seo = ({ title, contents }: { title: string, contents?: string }) => {
    const user = useRecoilValue(authAtom);
    const auth = useAuth();
    useEffect(() => {
        if (user === null) {
            auth.signre();
        }
    })

    return <Head>
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta property="og:title" content={`IsNotWorking | ${title}`} />
        <meta property="og:site_name" content={`IsNotWorking | ${title}`} />
        <meta property="og:type" content="website" />
        <meta
            property="og:description"
            content={`${contents ? contents : title}`}
        />
        <title>ISNOTWORKING | {title}</title>
    </Head>
}
export default Seo;