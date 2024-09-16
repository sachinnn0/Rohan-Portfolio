import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm Rohan Choudhary
      </h1>
      <p className="max-w-[700px] text-center text-lg text-muted-foreground sm:text-xl">
        I'm a frontend developer passionate about creating beautiful and functional web experiences.
      </p>
      <Button asChild className="mt-4">
        <Link href="#projects">
          View My Work <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  )
}