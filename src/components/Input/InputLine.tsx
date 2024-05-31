import styled from 'styled-components';
import { forwardRef, useEffect, useRef } from 'react';
import { refSetter } from '@admiral-ds/react-ui';

export const StyledInputLine = styled.input`
  border: none;
  outline: none;
  appearance: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ::placeholder {
    color: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
`;

const InputLineContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MaskBox = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Invisible = styled.span`
  color: transparent;
`;

const Visible = styled.span`
  color: ${(p) => p.theme.color['Neutral/Neutral 50']};
`;

export type InputLineProps = {
  dataPlaceholder?: string;
} & JSX.IntrinsicElements['input'];

export const InputLine = forwardRef<HTMLInputElement, InputLineProps>((props, ref) => {
  const { className, dataPlaceholder, ...inputProps } = props;
  const containerProps = { className };
  const placeholder = props.placeholder;
  const inputRef = useRef<HTMLInputElement>(null);
  const invisibleRef = useRef<HTMLSpanElement>(null);
  const visibleRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const inputNode = inputRef.current;
    const invNode = invisibleRef.current;
    const visNode = visibleRef.current;

    function oninput(this: HTMLInputElement) {
      const { value } = this;
      const len = value.length;
      if (invNode && visNode) {
        if (typeof placeholder === 'string' && placeholder.length > 0 && value.length == 0) {
          visNode.innerHTML = '';
          invNode.innerHTML = '';
        } else {
          invNode.innerHTML = value;
          visNode.innerHTML = dataPlaceholder?.substring(len) || '';
        }
      }
    }

    if (typeof dataPlaceholder === 'string' && inputNode && invNode && visNode) {
      oninput.apply(inputNode);
      inputNode.addEventListener('input', oninput);
      return () => inputNode.removeEventListener('input', oninput);
    }
  }, [dataPlaceholder, placeholder]);

  return (
    <InputLineContainer {...containerProps}>
      <StyledInputLine ref={refSetter(ref, inputRef)} {...inputProps} />
      <MaskBox>
        <Invisible ref={invisibleRef}></Invisible>
        <Visible ref={visibleRef}></Visible>
      </MaskBox>
    </InputLineContainer>
  );
});
