import { useTranslations } from "next-intl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import axiosInstance from "@/lib/api-client";

import { TASKS_QUERY_KEY } from "@/features/tasks/api";

export const useCreateTaskSchema = () => {
  const t = useTranslations("shared.error-messages");

  const createtaskSchema = z.object({
    title: z.string().min(1, { message: t("required") }),
    description: z.string().min(1, { message: t("required") }),
  });

  return createtaskSchema;
};

export type CreateTaskSchema = z.infer<ReturnType<typeof useCreateTaskSchema>>;

export const createTask = async (taskData: CreateTaskSchema): Promise<Task> => {
  const response = await axiosInstance.post<Task>("/task", taskData);
  return response.data;
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
    },
  });
};
