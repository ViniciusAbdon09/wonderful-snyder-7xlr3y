export interface User {
  id: number
  first_name: string
  last_name: string
  status: 'active' | 'inactive'
  register_on: string
}