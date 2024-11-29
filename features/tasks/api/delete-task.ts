import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/lib/api-client";

import { TASKS_QUERY_KEY } from "@/features/tasks/api";

export const deleteTask = async (taskId: number) => {
  const response = await axiosInstance.delete(`/task/${taskId}`);
  return response.data;
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
    },
  });
};
