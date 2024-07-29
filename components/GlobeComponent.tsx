import Globe from "@/components/magicui/globe";

export function GlobeComponent() {
  return (
    <div className="relative flex h-[570px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <Globe className="top-35" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}