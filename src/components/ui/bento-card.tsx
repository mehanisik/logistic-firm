import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"
import type { ReactNode } from "react"
import { Button } from "./button"
import { Badge } from "./badge"

type BentoCardProps = {
  name: string
  className: string
  background: ReactNode
  Icon: ReactNode
  description: string
  href: string
  cta: string
  badge?: string
}

export const BentoCard = ({ name, className, background, Icon, description, href, cta, badge }: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
      className,
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
    <div>{background}</div>

    {badge && (
      <div className="absolute top-4 left-4 z-20">
        <Badge variant="secondary" className="bg-white/90 text-gray-700 font-medium">
          {badge}
        </Badge>
      </div>
    )}

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <div className="flex items-center gap-3">{Icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
      <p className="max-w-lg text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="default" asChild size="sm" className="pointer-events-auto bg-teal-700 hover:bg-teal-800">
        <a href={href} className="flex items-center gap-2">
          {cta}
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)
