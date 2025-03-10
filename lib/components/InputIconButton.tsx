import styled from 'styled-components';
import { vars } from '@admiral-ds/web';

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
    fill: ${vars.color.Neutral_Neutral50};
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${vars.color.Neutral_Neutral30};
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${vars.color.Primary_Primary70};
  }
`;
