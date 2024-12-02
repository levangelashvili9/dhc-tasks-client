import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/lib/api-client";
import { TaskStatus } from "@/features/tasks/enums";
export const TASKS_QUERY_KEY = "tasks";

interface GetTasksDto {
  status?: TaskStatus;
  search?: string;
}

export const getTasks = async (filters: GetTasksDto): Promise<Task[]> => {
  const params: Record<string, string | number | boolean | undefined> = {};

  if (filters.status) {
    params.status = filters.status;
  }
  if (filters.search) params.search = filters.search;

  const response = await axiosInstance.get<PaginatedData<Task>>("/task", {
    params,
  });

  return response.data.data;
};

export const useTasks = (filters: GetTasksDto) => {
  return useQuery({
    queryKey: [TASKS_QUERY_KEY, filters],
    queryFn: () => getTasks(filters),
  });
};
