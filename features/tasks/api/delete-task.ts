import { useTranslations } from "next-intl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import axiosInstance from "@/lib/api-client";
import { TASKS_QUERY_KEY } from "@/features/tasks/api";

export const deleteTask = async (taskId: number) => {
  const response = await axiosInstance.delete(`/task/${taskId}`);
  return response.data;
};

export const useDeleteTask = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
      toast.success(t("tasks.toasts.delete"));
    },
    onError: () => {
      toast.error(t("shared.toasts.error"));
    },
  });
};
