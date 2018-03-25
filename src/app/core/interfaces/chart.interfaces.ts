export interface IChart {
  type?: string;
  legend?: boolean;
  colors?: any;
  labels?: string[] | Array<string[]>;
  data?: any[];
  datasets?: any[];
  options?: any;
}
