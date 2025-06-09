import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="fixed inset-0 min-h-screen w-screen overflow-hidden bg-background">
      <div className="fixed z-50 w-full px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mt-2 bg-background/95 backdrop-blur-md px-4 rounded-xl border-2 border-border shadow-lg lg:mt-2">
            <div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
              <Skeleton className="w-[120px] h-[51px] rounded-lg bg-muted shadow-sm" />
              <div className="hidden lg:flex lg:items-center lg:gap-x-6 xl:gap-x-8">
                <Skeleton className="h-6 w-[100px] rounded-md bg-muted shadow-sm" />
                <Skeleton className="h-6 w-[100px] rounded-md bg-muted shadow-sm" />
                <Skeleton className="h-6 w-[100px] rounded-md bg-muted shadow-sm" />
                <Skeleton className="h-6 w-[100px] rounded-md bg-muted shadow-sm" />
              </div>
              <div className="flex items-center gap-x-2 sm:gap-x-3">
                <Skeleton className="h-9 w-9 rounded-md bg-muted shadow-sm" />
                <Skeleton className="h-9 w-9 rounded-md bg-muted shadow-sm" />
                <Skeleton className="h-9 w-9 rounded-md bg-muted shadow-sm lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-border shadow-sm">
                <Skeleton className="h-4 w-[200px] rounded-full bg-muted shadow-sm" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-24 w-full max-w-3xl mx-auto rounded-xl bg-muted border-2 border-border shadow-lg" />
                <Skeleton className="h-20 w-full max-w-2xl mx-auto rounded-xl bg-muted border-2 border-border shadow-lg" />
              </div>
              <div className="flex justify-center gap-4">
                <Skeleton className="h-10 w-[160px] rounded-lg bg-muted border-2 border-border shadow-sm" />
                <Skeleton className="h-10 w-[160px] rounded-lg bg-muted border-2 border-border shadow-sm" />
              </div>
            </div>

            <Skeleton className="h-[calc(100vh-32rem)] w-full rounded-xl bg-muted border-2 border-border shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
