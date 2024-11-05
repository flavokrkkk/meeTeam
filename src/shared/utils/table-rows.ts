export interface ITableCols {
  id: number;
  title: string;
  key: string;
  render?: (id: number) => JSX.Element;
}

export interface ITableColumn {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
}
