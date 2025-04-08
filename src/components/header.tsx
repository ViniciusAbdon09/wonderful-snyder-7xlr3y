import { SidebarTrigger } from "@/components/ui/sidebar";

interface headerProps {
    title: string
}

export function Header({ title }: headerProps) {
    return (
        <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger className="-ml-1 cursor-pointer" />
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
        </div>
    )
}