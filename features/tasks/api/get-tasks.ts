import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/lib/api-client";

export const TASKS_QUERY_KEY = "tasks";

export const getTasks = async (): Promise<Task[]> => {
  const response = await axiosInstance.get<PaginatedData<Task>>("/task");
  return response.data.data;
};

export const useTasks = () => {
  return useQuery({
    queryKey: [TASKS_QUERY_KEY],
    queryFn: getTasks,
  });
};
