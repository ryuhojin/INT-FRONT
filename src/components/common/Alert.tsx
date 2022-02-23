import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { messageAtom } from "store/atom";
import { useMessage } from "utils/message";
import styled, { css, keyframes } from "styled-components";
import Button from "./Button";
const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opactiy: 1
    }
`;
const fadeOut = keyframes`
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
`;
const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;
const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  ${(props: { disappear: boolean }) =>
        props.disappear &&
        css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    margin-top:0.5rem;
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props: { disappear: boolean }) =>
        props.disappear &&
        css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const Alert = ({ confirmText }: any) => {
    const message = useRecoilValue(messageAtom);
    const messageFn = useMessage();
    const visible = message.isShow;
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);
    useEffect(() => {
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [localVisible, visible]);

    if (!animate && !localVisible) return null;
    return (

        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{message.title}</h3>
                <p>{message.message}</p>
                <ButtonGroup>
                    <Button color="red" onClick={() => { messageFn.close() }}>
                        {confirmText}
                    </Button>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
};
Alert.defaultProps = {
    title: "경고",
    confirmText: "확인",
};
export default Alert;
