import { Plus } from "lucide-react";
import { FormProvider } from "react-hook-form";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useEditUserSheet } from "./useEditUserSheet";

export function EditUserSheet() {
  const { form, isDisabled, isLoading, onSubmit, isOpen, close, user } = useEditUserSheet();

  return (
    <Sheet open={isOpen} onOpenChange={close}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Editar {user?.first_name}</SheetTitle>
          <SheetDescription>
            Preencha os dados do usuário para editar.
          </SheetDescription>
        </SheetHeader>
        <FormProvider {...form}>
          <form
            id="createUserSheet"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 flex flex-col py-2"
          >
            <div className="flex-1 space-y-4 px-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Digite o nome" {...field} />
                    </FormControl>
                    <FormDescription>
                      Nome do usuário
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Digite o sobrenome" {...field} />
                    </FormControl>
                    <FormDescription>
                      Sobrenome do usuário
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Ativo</SelectItem>
                          <SelectItem value="inactive">Inativo</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Status do usuário no sistema
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </FormProvider>
        <SheetFooter>
          <Button
            variant="ghost"
            disabled={isLoading}
            onClick={close}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            form="createUserSheet"
            type="submit"
            disabled={isDisabled || isLoading}
            className="flex-1"
          >
            <Plus className="size-3.5 mr-1" />
            Salvar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
