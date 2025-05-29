import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

export const { Link, usePathname, useRouter } = createNavigation(routing)
