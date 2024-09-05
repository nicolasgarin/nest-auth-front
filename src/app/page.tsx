import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const dynamic = "force-dynamic";

async function HomePage() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Auth app</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      </div>
    </>
  );
}

export default HomePage;
