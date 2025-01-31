import { call } from "./calls";
export interface tableComponent {
  calls: call[];
  totalCalls: number;
  hasNextPage: boolean;
  handlePaginationChange: (skip: number) => void;
  handleAddNote: (id: string) => void;
}
