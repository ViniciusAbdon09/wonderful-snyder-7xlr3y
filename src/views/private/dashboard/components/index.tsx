import { Header } from "@/components/header";
import { Charts } from "./Charts/Charts";
import { InfoCards } from "./InfoCards/infoCards";

export function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <Header title="Dashboard"/>
            <div className="flex-1">
                <InfoCards />
                <Charts />
            </div>
        </div>
    )
}