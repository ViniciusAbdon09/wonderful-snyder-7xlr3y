import { Switch, Route } from 'wouter'
import { Routes } from '@/router/Routes'
import { Dashboard as DashboardComponent } from '@/views/private/dashboard/components/index'

export function Dashboard() {
  return (
    <div className="flex-1">
        <Switch>
            <Route 
                path={Routes.DASHBOARD} 
                component={() => (
                    <>
                        <DashboardComponent />
                    </>
                )} 
            />
        </Switch>
    </div>
  )
}
