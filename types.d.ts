interface Entity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface PaginatedData<T> {
  data: T[];
  currentPage: number;
  totalCount: number;
  totalPages: number;
}

interface Task extends Entity {
  title: string;
  description: string;
  isCompleted: boolean;
}
