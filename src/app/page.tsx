import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure our highest quality standards.",
  },
  {
    name: "For our planet",
    icon: Leaf,
    description: "We 've pledged 1% of our sales to the preservation & reservation of the natural evoirmenment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high-quality<span className="text-blue-600"> digital assets</span>.
          </h1>
          <p className="max-w-prose text-lg mt-6 text-muted-foreground">Welcome to DigitalHippo, Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants({ variant: "default" })}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: list products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="p-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:text-left md:flex lg:block lg:text-center">
                <div className="flex md:flex-shrink-0 justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">{<perk.icon className="w-1/3 h-1/3" />}</div>
                </div>
                <div className="mt-6 md:mt-0 lg:mt-6 md:ml-4 lg:ml-0">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
