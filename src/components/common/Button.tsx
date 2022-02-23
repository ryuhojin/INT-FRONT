import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }: any) => {
        const selected = theme.palette[color];
        return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props: any) =>
                props.outline &&
                css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
    }}
`;

const sizes: any = {
    large: {
        height: "3rem",
        fontSize: "1.25rem",
    },
    medium: {
        height: "2.25rem",
        fontSize: "1rem",
    },
    small: {
        height: "1.75rem",
        fontSize: "0.875rem",
    },
};

const sizeStyles = css`
  ${({ size }: any) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props: any) =>
        props.fullWidth &&
        css`
      width: 100%
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;
  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  &:not(:first-child) {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;

const Button = ({ children, color, size, outline, fullWidth, ...rest }: any) => {
    return (
        <StyledButton
            color={color}
            size={size}
            outline={outline}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    color: "gray",
    size: "medium",
};

export default Button;
