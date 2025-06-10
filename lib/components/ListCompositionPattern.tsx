import { createElement } from 'react';

export const Container = <T extends object>({
  model,
  ...props
}: React.ComponentProps<'div'> & {
  model: { list: Array<T>; render: React.FunctionComponent<T> };
}) => {
  return <div {...props}>{model.list.map(({ ...p }) => createElement(model.render, p))}</div>;
};

export const Cell = ({ ...props }: React.ComponentProps<'div'>) => {
  return <div {...props} />;
};

export const Widget = () => {
  return <Container model={{ list: new Array(157).fill({}).map(() => ({ className: 'cell' })), render: Cell }} />;
};
