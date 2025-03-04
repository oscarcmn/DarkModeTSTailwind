import type { Route } from "./+types/home";
import Header from "../components/Header";
import CardList from "../components/CardList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen">
      <Header />
      <CardList />
    </div>
  );
}
