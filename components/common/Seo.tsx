import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import service from "../../api";
import { RootState } from "../../store/modules";
import { setSignReThunk } from "../../store/modules/user";
import { getCookie } from "../../utils/common";

const Seo = ({ title, contents }: { title: string, contents?: string }) => {
    const { user } = useSelector((state: RootState) => state.user.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(user).length != 0 || !getCookie('access-token')) return;
        service.defaults.headers.common['access-token'] = getCookie('access-token') || '';
        dispatch(setSignReThunk());
    }, [])

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