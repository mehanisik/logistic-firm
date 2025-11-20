import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const commonHeroClasses =
	"relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8";

export default function Loading() {
	return (
		<div className="relative flex bg-background min-h-screen w-full flex-col overflow-hidden">
			<div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/[0.02] to-black/[0.01]" />

			<div className="hidden md:block absolute inset-0 w-full h-full p-3 z-[-1]">
				<div className="w-full h-full rounded-xl overflow-hidden relative">
					<Skeleton className="absolute inset-0  animate-pulse" />
					<div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-black/[0.04] to-black/[0.06] dark:from-white/[0.02] dark:via-white/[0.04] dark:to-white/[0.06]" />
				</div>
			</div>

			<div className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 animate-in slide-in-from-top-4 duration-500">
				<div className="mx-auto max-w-7xl">
					<div className="bg-background/95 backdrop-blur-md px-4 rounded-xl border border-border/50 shadow-sm">
						<div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
							<Skeleton className="h-[51px] w-[120px] rounded-lg  animate-pulse" />
							<div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
								{["nav-1", "nav-2", "nav-3", "nav-4"].map((id) => (
									<Skeleton
										key={id}
										className="h-6 w-[100px] rounded-md  animate-pulse"
									/>
								))}
							</div>
							<div className="flex items-center gap-x-2 sm:gap-x-3">
								<Skeleton className="h-9 w-9 rounded-md  animate-pulse" />
								<Skeleton className="h-9 w-9 rounded-md  animate-pulse" />
								<Skeleton className="h-9 w-9 rounded-md  animate-pulse lg:hidden" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={cn(commonHeroClasses, "flex md:hidden pt-32")}>
				<div className="max-w-2xl mx-auto text-center space-y-12">
					<div className="inline-flex items-center justify-center">
						<Skeleton className="h-10 w-[240px] rounded-full  animate-pulse" />
					</div>
					<div className="space-y-6">
						<Skeleton className="h-24 w-full max-w-xl mx-auto rounded-xl  animate-pulse" />
						<Skeleton className="h-20 w-full max-w-lg mx-auto rounded-xl  animate-pulse" />
					</div>
					<div className="flex justify-center gap-4">
						<Skeleton className="h-12 w-[180px] rounded-lg  animate-pulse" />
						<Skeleton className="h-12 w-[180px] rounded-lg  animate-pulse" />
					</div>
				</div>
			</div>

			<div className={cn(commonHeroClasses, "hidden md:flex pt-32")}>
				<div className="max-w-4xl mx-auto text-center space-y-12">
					<div className="inline-flex items-center justify-center">
						<Skeleton className="h-12 w-[280px] rounded-full  animate-pulse" />
					</div>
					<div className="space-y-8">
						<Skeleton className="h-32 w-full max-w-4xl mx-auto rounded-xl  animate-pulse" />
						<Skeleton className="h-28 w-full max-w-3xl mx-auto rounded-xl  animate-pulse" />
					</div>
					<div className="flex justify-center gap-6">
						<Skeleton className="h-14 w-[200px] rounded-lg  animate-pulse" />
						<Skeleton className="h-14 w-[200px] rounded-lg  animate-pulse" />
					</div>
				</div>
			</div>
		</div>
	);
}
