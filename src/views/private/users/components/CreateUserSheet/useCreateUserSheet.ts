import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo } from "react";
import {
  SubmitHandler,
  useForm,
  DefaultValues,
} from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useCreateUserSheetStore } from "./stores/useCreateUserSheetStore";
import { useUserStore } from "@/store/useUserStore";
import { createUserFormSchema } from "./schema/createUserSchema";

export type CreateUser = z.infer<typeof createUserFormSchema>;

export function useCreateUserSheet() {
  const isOpen = useCreateUserSheetStore((store) => store.isOpen);

  const defaultValues = useMemo((): DefaultValues<CreateUser> => {
    return {
      first_name: "",
      last_name: "",
      status: "active",
      register_on: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
    };
  }, []);

  const form = useForm<CreateUser>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(createUserFormSchema),
  });

  const close = useCallback(() => {
    form.reset();
    useCreateUserSheetStore.getState().close();
  }, [form]);

  const onSubmit: SubmitHandler<CreateUser> = useCallback(
    async (user) => {
      useUserStore.getState().addUser({
        ...user,
        id: useUserStore.getState().users.length + 1,
      })
      toast.success(`O usuário ${user.first_name} ${user.last_name} foi criado.`);
      close();
    },
    [close],
  );

  const isLoading = form.formState.isSubmitting;
  const isDisabled = !form.formState.isValid;

  return {
    close,
    form,
    isDisabled,
    isLoading,
    isOpen,
    onSubmit,
  };
}
