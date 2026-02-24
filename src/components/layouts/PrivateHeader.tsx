import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Setting from "./Setting"
import { auth } from "@/auth"

export default async function PrivateHeader() {
    const session = await auth()
    if(!session?.user?.email) throw new Error("不正なリクエストです")

    const SafeSession = {
        user: {
            name: session.user?.name ?? null,
            email: session.user?.email ?? null,
            image: session.user?.image ?? null,
        }
    }
  return (
    <header className="border-b bg-blue-200">
      <div className="container mx-auto px-4 py-4 flex item-center justify-between">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink className="font-bold text-xl">
                            管理ページ
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <Setting session={SafeSession} />
      </div>
    </header>
  )
}
