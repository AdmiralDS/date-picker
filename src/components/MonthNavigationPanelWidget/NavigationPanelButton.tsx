import type { MouseEventHandler } from 'react';
import { forwardRef } from 'react';

import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { IconPlacement, TooltipHoc } from '@admiral-ds/react-ui';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  type: 'left' | 'right';
};

export const NavigationPanelButton = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, disabled, type }, ref) => (
  <IconPlacement
    dimension="lSmall"
    ref={ref}
    onClick={(event) => {
      event?.preventDefault();
      onClick(event);
    }}
    disabled={disabled}
    highlightFocus={false}
    data-direction={type}
  >
    {type === 'left' && <ChevronLeftOutline />}
    {type === 'right' && <ChevronRightOutline />}
  </IconPlacement>
));

export const NavigationPanelButtonWithTooltip = TooltipHoc(NavigationPanelButton);
