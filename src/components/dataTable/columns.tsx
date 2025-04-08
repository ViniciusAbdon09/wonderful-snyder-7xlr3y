

import { ColumnDef } from "@tanstack/react-table"
import { User } from "@/types"
import { DataTableRowActions } from "./dataTableRowActions"
import { format } from "date-fns"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "first_name",
    header: "Nome",
    cell: ({ row }) => <div>{row.getValue("first_name")}</div>,
  },
  {
    accessorKey: "last_name",
    header: "Sobrenome",
    cell: ({ row }) => <div>{row.getValue("last_name")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === 'active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
        }`}>
          {status === 'active' ? 'Ativo' : 'Inativo'}
        </span>
      )
    }
  },
  {
    accessorKey: "register_on",
    header: "Data de Registro",
    cell: ({ row }) => {
      try {
        const date = new Date(row.getValue("register_on"))
        return <div>{format(date, "mm/DD/yyyy")}</div>
      } catch {
        return <div>{row.getValue("register_on")}</div>
      }
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const { onEdit, onDelete } = table.options.meta as {
        onEdit: (user: User) => void
        onDelete: (id: number) => void
      }

      return (
        <DataTableRowActions 
          row={row} 
          onEdit={onEdit} 
          onDelete={onDelete}
        />
      )
    },
  },
] 