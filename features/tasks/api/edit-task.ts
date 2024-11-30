import { useTranslations } from "next-intl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

import axiosInstance from "@/lib/api-client";
import { TASKS_QUERY_KEY } from "@/features/tasks/api";

export const useEditTaskSchema = () => {
  const t = useTranslations("shared.error-messages");

  const editTaskSchema = z.object({
    title: z.string().min(1, { message: t("required") }),
    description: z.string().min(1, { message: t("required") }),
  });

  return editTaskSchema;
};

export type EditTaskSchema = z.infer<ReturnType<typeof useEditTaskSchema>>;

export const editTask = async ({
  taskId,
  taskData,
}: {
  taskId: number;
  taskData: EditTaskSchema;
}): Promise<Task> => {
  const response = await axiosInstance.patch<Task>(`/task/${taskId}`, taskData);
  return response.data;
};

export const useEditTask = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
      toast.success(t("tasks.toasts.edit"));
    },
    onError: () => {
      toast.error(t("shared.toasts.error"));
    },
  });
};
