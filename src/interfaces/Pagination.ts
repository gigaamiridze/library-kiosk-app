export interface IPaginationProps {
  data: any;
  currentPage: number;
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isPreviousData: boolean;
  isFetching: boolean;
}
