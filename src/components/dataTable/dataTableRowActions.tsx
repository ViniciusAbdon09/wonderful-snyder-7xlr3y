import { MoreHorizontal } from "lucide-react"
import { Row } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, Eye, Trash } from "lucide-react"
import { User } from "@/types"

interface DataTableRowActionsProps {
  row: Row<User>
  onEdit: (user: User) => void
  onDelete: (id: number) => void
  onView?: (user: User) => void
}

export function DataTableRowActions({ 
  row, 
  onEdit, 
  onDelete,
  onView 
}: DataTableRowActionsProps) {
  const user = row.original

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="h-8 w-8 p-0 flex items-center justify-center cursor-pointer hover:bg-accent rounded-sm">
          <MoreHorizontal className="h-4 w-4" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onEdit(user)}>
          <Edit className="mr-2 h-4 w-4" />
          Editar
        </DropdownMenuItem>
        {onView && (
          <DropdownMenuItem onClick={() => onView(user)}>
            <Eye className="mr-2 h-4 w-4" />
            Visualizar detalhes
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="text-red-600"
          onClick={() => onDelete(user.id)}
        >
          <Trash className="mr-2 h-4 w-4" />
          Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 