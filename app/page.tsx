import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20">
      <div className="flex flex-col items-center gap-16 w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground">
            Moonlab
          </h1>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
            A quiet place to build things that matter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
          <div className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-border/60 hover:bg-accent/20">
            <div className="relative h-44 overflow-hidden bg-muted">
              <Image
                src="/mori.png"
                alt="Mori app screenshot"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col gap-1.5 p-5">
              <h2 className="text-base font-medium text-card-foreground">Mori</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your cross-platform Growtopia companion app.
              </p>
            </div>
          </div>

          <div className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-border/60 hover:bg-accent/20">
            <div className="relative h-44 overflow-hidden bg-muted">
              <Image
                src="/moonlight.png"
                alt="Moonlight app screenshot"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col gap-1.5 p-5">
              <h2 className="text-base font-medium text-card-foreground">Moonlight</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pixel Worlds pure network emulation multibot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
