import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "FilmSnack" },
    { name: "description", content: "Welcome to FilmSnack!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-primary">
            Welcome to
            <span className="sr-only"></span>
          </h1>
          <div className="font-bold text-4xl text-primary">FilmSnack</div>
        </header>
      </div>
    </div>
  );
}
