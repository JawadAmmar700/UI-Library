import { AnimatedHoverCardComponent } from "@/components/animated-hover-card";

export default function Home() {
  return (
    <main className="md:py-10 xl:px-52 lg:px-40  p-5">
      <AnimatedHoverCardComponent
        title="IOS Picker"
        content="A custom component for the Web that mimics the native iOS picker component."
      />
    </main>
  );
}
