import styled from 'styled-components';

export interface AnyIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function AnyIcon({ icon, ...props }: AnyIconProps) {
  const Icon = icon;
  return <Icon {...props} />;
}

export const InputIconButton = styled(AnyIcon)`
  width: 24px;
  [data-size='s'] & {
    width: 20px;
  }

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
  }
`;
