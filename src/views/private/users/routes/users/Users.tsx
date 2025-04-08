import { Switch, Route } from 'wouter'
import { UsersTable } from '@/views/private/users/components/UsersTable/UsersTable'
import { Routes } from '@/router/Routes'
import { CreateUserSheet } from '@/views/private/users/components/CreateUserSheet/CreateUserSheet'
import { EditUserSheet } from '@/views/private/users/components/EditUserSheet/EditUserSheet'

export function Users() {
  return (
    <div className="flex-1">
        <Switch>
            <Route 
                path={Routes.USERS} 
                component={() => (
                    <>
                        <UsersTable />
                        <CreateUserSheet />
                        <EditUserSheet />
                    </>
                )} 
            />
        </Switch>
    </div>
  )
}
