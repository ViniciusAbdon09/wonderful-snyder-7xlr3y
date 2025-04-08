import { useUserStore } from "@/store/useUserStore"
import { useMemo } from "react"

export function useCharts() {
   const COLORS = ['#009f5c', '#44625c']

  const users = useUserStore(state => state.users)

  const monthlyData = useMemo(() => {
    const data = users.reduce((acc, user) => {
      const [_, month] = user.register_on.split('/')
      const monthIndex = Number(month) - 1
      const monthName = new Date(0, monthIndex).toLocaleString('pt-BR', { month: 'short' })
      
      acc[monthName] = (acc[monthName] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const allMonths = Array.from({ length: 12 }, (_, i) => {
      const monthName = new Date(0, i).toLocaleString('pt-BR', { month: 'short' })
      return {
        name: monthName,
        value: data[monthName] || 0
      }
    })

    return allMonths
  }, [users])

  const statusData = useMemo(() => {
    const data = users.reduce((acc, user) => {
      acc[user.status] = (acc[user.status] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return [
      { name: 'Ativos', value: data.active || 0 },
      { name: 'Inativos', value: data.inactive || 0 }
    ]
  }, [users])

  return { monthlyData, statusData, COLORS }
}
