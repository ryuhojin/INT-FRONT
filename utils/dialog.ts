import { useRecoilState } from "recoil"
import { dialogAtom } from "store/atom";

export const useDialog = () => {
    const [dialog, setDialog] = useRecoilState(dialogAtom);

    function show(children: any) {
        setDialog({ title: "알림", children: children, visible: true });
    }
    function close() {
        setDialog({ title: "알림", children: null, visible: false })
    }
    return { show, close }
}