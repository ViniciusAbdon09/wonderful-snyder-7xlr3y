import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo } from "react";
import {
  SubmitHandler,
  useForm,
  DefaultValues,
} from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useEditUserSheetStore } from "./stores/useEditUserSheetStore";
import { useUserStore } from "@/store/useUserStore";
import { editUserFormSchema } from "./schema/editUserSchema";

export type EditUser = z.infer<typeof editUserFormSchema>;

export function useEditUserSheet() {
  const user = useEditUserSheetStore((store) => store.user);

  const defaultValues = useMemo((): DefaultValues<EditUser> => {
    return {
      id: user?.id || 0,
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      status: user?.status || "active",
        register_on: user?.register_on || new Date().toLocaleDateString("pt-BR"),
      };
  }, [user]);

  const form = useForm<EditUser>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(editUserFormSchema),
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);

  const close = useCallback(() => {
    form.reset();
    useEditUserSheetStore.getState().close();
  }, [form]);

  const onSubmit: SubmitHandler<EditUser> = useCallback(
    async (user) => {
      useUserStore.getState().updateUser(user);
      toast.success(`O usuário ${user.first_name} ${user.last_name} foi atualizado.`);
      close();
    },
    [close],
  );

  const isLoading = form.formState.isSubmitting;
  const isDisabled = !form.formState.isValid || !form.formState.isDirty;

  return {
    close,
    form,
    isDisabled,
    isLoading,
    isOpen: !!user,
    user,
    onSubmit,
  };
}
