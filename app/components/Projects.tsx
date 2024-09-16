import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully functional e-commerce website built with Next.js and Stripe.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    link: "https://images.unsplash.com/photo-1725576415790-a5b4009a7952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather data using a third-party API.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "API Integration", "CSS Modules"],
    link: "https://images.unsplash.com/photo-1725576415790-a5b4009a7952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  },
  {
    title: "Task Management Tool",
    description: "A collaborative task management tool with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Firebase", "Vuex"],
    link: "https://images.unsplash.com/photo-1725576415790-a5b4009a7952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
              ))}
            </CardFooter>
            <CardFooter>
              <Link href={project.link} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}