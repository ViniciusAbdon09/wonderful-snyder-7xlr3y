import { useUserStore } from '@/store/useUserStore'

export function useInfoCards() {
    const users = useUserStore(state => state.users)

    const sortedUsers = [...users].sort((a, b) => {
        if (!a.register_on || !b.register_on) return 0
        const [day1, month1, year1] = a.register_on.split('/')
        const [day2, month2, year2] = b.register_on.split('/')
        const date1 = new Date(Number(year1), Number(month1) - 1, Number(day1))
        const date2 = new Date(Number(year2), Number(month2) - 1, Number(day2))
        return date1.getTime() - date2.getTime()
    })

    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()

    const isDateInMonth = (dateStr: string, year: number, month: number) => {
        const [day, month1, year1] = dateStr.split('/')
        const date = new Date(Number(year1), Number(month1) - 1, Number(day))
        return date.getFullYear() === year && date.getMonth() === month
    }

    const totalUsers = sortedUsers.length
    const activeUsers = sortedUsers.filter(user => user.status === 'active').length
    const inactiveUsers = sortedUsers.filter(user => user.status === 'inactive').length
    const newUsers = sortedUsers.filter(user => 
        user.register_on && isDateInMonth(user.register_on, currentYear, currentMonth)
    ).length

    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear

    const usersUntilLastMonth = sortedUsers.filter(user => {
        if (!user.register_on) return false
        const [day, month, year] = user.register_on.split('/')
        const registerDate = new Date(Number(year), Number(month) - 1, Number(day))
        const lastMonthLastDay = new Date(previousYear, previousMonth + 1, 0)
        return registerDate <= lastMonthLastDay && 
               (registerDate.getFullYear() < previousYear || 
               (registerDate.getFullYear() === previousYear && registerDate.getMonth() <= previousMonth))
    })

    const lastMonthNewUsers = sortedUsers.filter(user => {
        if (!user.register_on) return false
        const [day, month, year] = user.register_on.split('/')
        const registerDate = new Date(Number(year), Number(month) - 1, Number(day))
        return registerDate.getFullYear() === previousYear && registerDate.getMonth() === previousMonth
    }).length

    const lastMonthInactive = usersUntilLastMonth.filter(user => user.status === 'inactive').length

    const newActiveUsers = sortedUsers.filter(user => 
        user.status === 'active' && 
        user.register_on && 
        isDateInMonth(user.register_on, currentYear, currentMonth)
    ).length

    const lastMonthNewActiveUsers = sortedUsers.filter(user => {
        if (!user.register_on || user.status !== 'active') return false
        const [day, month, year] = user.register_on.split('/')
        const registerDate = new Date(Number(year), Number(month) - 1, Number(day))
        return registerDate.getFullYear() === previousYear && registerDate.getMonth() === previousMonth
    }).length

    const calculatePercentage = (current: number, previous: number) => {
        if (previous === 0) return current * 100
        return ((current - previous) / previous) * 100
    }

    const totalPercentage = calculatePercentage(newUsers, lastMonthNewUsers)
    const activePercentage = calculatePercentage(newActiveUsers, lastMonthNewActiveUsers)
    const inactivePercentage = calculatePercentage(inactiveUsers, lastMonthInactive)
    const newPercentage = calculatePercentage(newUsers, lastMonthNewUsers)

    return {
        totalUsers,
        activeUsers,
        inactiveUsers,
        newUsers,
        totalPercentage,
        activePercentage,
        inactivePercentage,
        newPercentage
    }
}
