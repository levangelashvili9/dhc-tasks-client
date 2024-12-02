import { useTranslations } from "next-intl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import axiosInstance from "@/lib/api-client";
import { TASKS_QUERY_KEY } from "@/features/tasks/api";
import { TaskStatus } from "@/features/tasks/enums";

interface ClearAllDto {
  status?: TaskStatus;
}

export const clearAll = async (filters: ClearAllDto) => {
  const params: Record<string, string | number | boolean | undefined> = {};

  if (filters.status) {
    params.status = filters.status;
  }

  const response = await axiosInstance.delete("/task", {
    params,
  });

  return response.data;
};

export const useClearAll = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: clearAll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
      toast.success(t("tasks.toasts.clear-all"));
    },
    onError: () => {
      toast.error(t("shared.toasts.error"));
    },
  });
};
