export type InputDimension = 'xl' | 'm' | 's';

export interface DimensionInterface {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: InputDimension;
  /** Задает ширину */
  width?: string | number;
}
