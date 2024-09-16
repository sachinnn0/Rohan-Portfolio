import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Vue.js", "Node.js", "Express", "MongoDB", "Git", "Responsive Design",
  "UI/UX Design", "RESTful APIs", "GraphQL", "Webpack", "Jest", "Cypress"
]

export default function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}