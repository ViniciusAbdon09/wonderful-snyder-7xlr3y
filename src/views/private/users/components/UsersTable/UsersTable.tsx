import { useUserStore } from "@/store/useUserStore"
import { columns } from "@/components/dataTable/columns"
import { User } from "@/types"
import { DataTable } from "@/components/dataTable/dataTable"
import { useEditUserSheetStore } from "../EditUserSheet/stores/useEditUserSheetStore"
import { Header } from "@/components/header"

export function UsersTable() {
  const users = useUserStore(state => state.users)
  const deleteUser = useUserStore(state => state.deleteUser)

  const handleEdit = (user: User) => {
    useEditUserSheetStore.getState().open(user)
  }

  return (
    <div className="flex flex-col gap-4">
      <Header title="Lista de Usuários"/>
      <DataTable 
        columns={columns} 
        data={users}
        onEdit={handleEdit}
        onDelete={deleteUser}
      />
    </div>
  )
} 