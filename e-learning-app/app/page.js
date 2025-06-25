import UpdateBanner from "@/components/updateBanner";
import HomeHero from "@/components/homeHero";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <div className="py-5 px-20 bg-[var(--background)]">
      <UpdateBanner />
      </div>
    </main>
  );
}
