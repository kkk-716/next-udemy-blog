'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { signOut } from "@/auth"
import { Session } from "next-auth"
import { logout } from "@/lib/actions/logout"

type SafeSession = {
    user: {
        name: string | null
        email: string | null
        image: string | null
    }
}

export default function Setting({session}: {session: SafeSession}) {

    return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="font-medium">
        {session.user?.name}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-48">
    <form action={logout}>
        <DropdownMenuItem className="cursor-point">
            <button type="submit" className="w-full text-left">
                ログアウト
            </button>
        </DropdownMenuItem>
    </form>
  </DropdownMenuContent>
</DropdownMenu>
  )
}
