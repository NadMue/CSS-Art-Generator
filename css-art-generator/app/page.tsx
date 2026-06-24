import HeroSection from "@/components/HeroSection";
import HomeButton from "@/components/HomeButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <HeroSection 
        title="Create CSS Art visually" 
        description="A powerful tool to generate beautiful CSS art with ease."
        image="/background-image.webp"
      />
      <main className="flex-1 container mx-auto py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-8">
            <HomeButton label="Open Editor" href="/editor" />
          </div>
          {/* Rest of the content */}
        </div>
      </main>
    </div>
  );
}
