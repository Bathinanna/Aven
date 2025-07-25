import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import VapiWidgetWrapper from "@/components/VapiWidgetWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VapiWidgetWrapper
        apiKey={process.env.NEXT_PUBLIC_VAPI_API_KEY || ""}
        assistantId={process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || ""}
      />
    </main>
  );
}
