import { useTranslations } from "next-intl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import axiosInstance from "@/lib/api-client";
import { TASKS_QUERY_KEY } from "@/features/tasks/api";

export const clearAll = async () => {
  const response = await axiosInstance.delete("/task");
  return response.data;
};

export const useClearAll = () => {
  const t = useTranslations("tasks.toasts");
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: clearAll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY] });
      toast.success(t("clear-all"));
    },
  });
};
