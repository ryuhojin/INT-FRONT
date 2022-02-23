import { useRecoilState } from "recoil"
import { messageAtom } from "store/atom"

export const useMessage = () => {
    const [message, setMessage] = useRecoilState(messageAtom)
    function show(msg: string, type = 'alert') {
        setMessage({ title: "알림", message: msg, isShow: true })
    }
    function close() {
        setMessage({ title: "알림", message: "", isShow: false })
    }
    return { show, close };
}