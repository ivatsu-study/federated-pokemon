import dynamic from "next/dynamic";

const Pikachu = dynamic(
  () => {
    return import("remote_nextjs_module/Pikachu");
  },
  { ssr: true }
);

export default function Home() {
  return (
    <main>
      <h1>Welcome to Home Module!</h1>
      <Pikachu />
    </main>
  );
}
