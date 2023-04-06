import dynamic from "next/dynamic";

const Test = dynamic(
  () => {
    return import("remote_nextjs_module/Test");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Home Module!</h1>
        <Test />
      </main>
    </div>
  );
}
