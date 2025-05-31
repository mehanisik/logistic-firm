import { IconLoader2 } from "@tabler/icons-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <IconLoader2 className="w-8 h-8 animate-spin text-primary" />
      <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
    </div>
  );
}
