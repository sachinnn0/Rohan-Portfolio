import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Rohan Choudhary</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
        <Button asChild className="ml-auto">
          <Link href="#contact">Hire Me</Link>
        </Button>
      </div>
    </header>
  )
}