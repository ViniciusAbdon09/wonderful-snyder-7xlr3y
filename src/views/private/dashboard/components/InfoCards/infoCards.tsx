import { UserIcon, UserCheckIcon, UserMinusIcon, UserPlusIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useInfoCards } from './useInfoCards'

export function InfoCards() {
    const { totalUsers, activeUsers, inactiveUsers, newUsers, totalPercentage, activePercentage, inactivePercentage, newPercentage } = useInfoCards()

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="transition-all hover:scale-105">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Total de Usuários</p>
                            <h2 className="text-3xl font-bold text-gray-700">{totalUsers}</h2>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-full">
                            <UserIcon className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className={`${totalPercentage >= 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
                            {totalPercentage >= 0 ? '↑' : '↓'} {Math.abs(totalPercentage).toFixed(1)}%
                        </span>
                        <span className="text-gray-400 text-sm ml-2">vs mês anterior</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="transition-all hover:scale-105">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Usuários Ativos</p>
                            <h2 className="text-3xl font-bold text-gray-700">{activeUsers}</h2>
                        </div>
                        <div className="bg-green-100 p-3 rounded-full">
                            <UserCheckIcon className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className={`${activePercentage >= 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
                            {activePercentage >= 0 ? '↑' : '↓'} {Math.abs(activePercentage).toFixed(1)}%
                        </span>
                        <span className="text-gray-400 text-sm ml-2">vs mês anterior</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="transition-all hover:scale-105">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Usuários Inativos</p>
                            <h2 className="text-3xl font-bold text-gray-700">{inactiveUsers}</h2>
                        </div>
                        <div className="bg-red-100 p-3 rounded-full">
                            <UserMinusIcon className="w-6 h-6 text-red-600" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className={`${inactivePercentage >= 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
                            {inactivePercentage >= 0 ? '↑' : '↓'} {Math.abs(inactivePercentage).toFixed(1)}%
                        </span>
                        <span className="text-gray-400 text-sm ml-2">vs mês anterior</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="transition-all hover:scale-105">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Novos Usuários</p>
                            <h2 className="text-3xl font-bold text-gray-700">{newUsers}</h2>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-full">
                            <UserPlusIcon className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className={`${newPercentage >= 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
                            {newPercentage >= 0 ? '↑' : '↓'} {Math.abs(newPercentage).toFixed(1)}%
                        </span>
                        <span className="text-gray-400 text-sm ml-2">vs mês anterior</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}