import { create } from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware"
import { StateCreator } from 'zustand'
import { User } from '@/types'
import records from '@/data/registros.json'

export interface UserStore {
  users: User[]
  filteredUsers: User[]
  searchTerm: string
  selectedUser: User | null
  setUsers: (users: User[]) => void
  setSearchTerm: (term: string) => void
  setSelectedUser: (user: User | null) => void
  addUser: (user: User) => void
  deleteUser: (id: number) => void
  updateUser: (user: User) => void
  filterUsers: (term: string) => void
}

const usersWithStatus = records.map(user => ({
  ...user,
  status: 'active',
  register_on: new Date(user.register_on).toLocaleDateString('pt-BR')
}))

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: usersWithStatus as User[],
      filteredUsers: usersWithStatus as User[],
      searchTerm: '',
      selectedUser: null,
    
      setUsers: (users) => set({ users, filteredUsers: users }),
      
      setSearchTerm: (searchTerm) => set({ searchTerm }),
      
      setSelectedUser: (selectedUser) => set({ selectedUser }),
      
      addUser: (newUser) => set((state) => {
        const users = [...state.users, newUser]
        return { users, filteredUsers: users }
      }),
      
      deleteUser: (id) => set((state) => {
        const users = state.users.filter(user => user.id !== id)
        return { users, filteredUsers: users }
      }),
      
      updateUser: (updatedUser) => set((state) => {
        const users = state.users.map(user => 
          user.id === updatedUser.id ? updatedUser : user
        )
        return { users, filteredUsers: users }
      }),
      
      filterUsers: (term) => set((state) => ({
        filteredUsers: state.users.filter(user => 
          user.first_name.toLowerCase().includes(term.toLowerCase()) ||
          user.last_name.toLowerCase().includes(term.toLowerCase()) ||
          user.status.toLowerCase().includes(term.toLowerCase())
        )
      }))
    }),
    {
      name: "user-store-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)