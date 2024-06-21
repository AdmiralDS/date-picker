import styled from 'styled-components';
import { forwardRef, useEffect, useRef } from 'react';
import { refSetter } from '@admiral-ds/react-ui';

export const StyledInputLine = styled.input<{ $isTmpValue?: boolean }>`
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

  color: ${(p) => (p.$isTmpValue ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
  ::placeholder {
    color: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
`;

const Visible = styled.span`
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
  transition: color 0.3s ease-in-out;
`;

const Invisible = styled.span`
  color: transparent;
`;

const InputLineContainer = styled.div`
  position: relative;
  display: inline-block;
  &:focus-within ${Visible} {
    color: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
`;

const MaskBox = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export type InputLineProps = JSX.IntrinsicElements['input'] & {
  dataPlaceholder?: string;
  tmpValue?: string;
  value?: string;
};

export const InputLine = forwardRef<HTMLInputElement, InputLineProps>((props, ref) => {
  const { className, dataPlaceholder, tmpValue, ...inputProps } = props;
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
    // inputProps.value inputProps.defaultValue важно, изменение не приводит к триггеру события input
  }, [dataPlaceholder, placeholder, inputProps.value, inputProps.defaultValue, tmpValue]);
  const isTmpValue = typeof tmpValue === 'string';
  return (
    <InputLineContainer {...containerProps}>
      <StyledInputLine
        ref={refSetter(ref, inputRef)}
        {...inputProps}
        $isTmpValue={isTmpValue}
        value={isTmpValue ? tmpValue : inputProps.value}
      />
      <MaskBox>
        <Invisible ref={invisibleRef}></Invisible>
        <Visible ref={visibleRef}></Visible>
      </MaskBox>
    </InputLineContainer>
  );
});
