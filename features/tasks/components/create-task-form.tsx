"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateTaskSchema,
  useCreateTask,
  useCreateTaskSchema,
} from "@/features/tasks/api";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CreateTaskFormProps = {
  closeDialog: () => void;
};

export const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  closeDialog,
}) => {
  const t = useTranslations("tasks.create");

  const createtaskSchema = useCreateTaskSchema();
  const { mutateAsync: createTask } = useCreateTask();

  const form = useForm<CreateTaskSchema>({
    resolver: zodResolver(createtaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: CreateTaskSchema) => {
    await createTask(values, {
      onSuccess: () => {
        closeDialog();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-6 space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t("inputs.title.placeholder")}
                    className="bg-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={t("inputs.description.placeholder")}
                    className="bg-background shadow-md shadow-shadow"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button size={"sm"} type="submit" className="w-full">
          {t("button")}
        </Button>
      </form>
    </Form>
  );
};
