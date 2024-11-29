import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/api-client";

import { TASKS_QUERY_KEY } from "@/features/tasks/api";

export const completeTask = async (taskId: number): Promise<Task> => {
  const response = await axiosInstance.patch<Task>(`/task/${taskId}/complete`);
  return response.data;
};

export const useCompleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
    },
  });
};
