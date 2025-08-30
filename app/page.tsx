"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ChevronUp, Code, Database, Brain, Award, BookOpen, Send } from "lucide-react"
import FadingText from "@/components/fading-text"

export default function Portfolio() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const skills = [
    { name: "C", icon: Code, level: "Proficient" },
    { name: "Python", icon: Code, level: "Proficient" },
    { name: "MySQL", icon: Database, level: "Proficient" },
    { name: "HTML5", icon: Code, level: "Proficient" },
    { name: "CSS", icon: Code, level: "Learning" },
    { name: "Machine Learning", icon: Brain, level: "Basics Covered" },
  ]

  const achievements = [
    {
      title: "Class XII Subject Topper",
      description: "English - Score: 98%",
      icon: Award,
      year: "2024",
    },
    {
      title: "NPTEL Elite Performer",
      description: "Joy of Computing using Python - Score: 72%",
      icon: BookOpen,
      year: "2025",
    },
    {
      title: "Mathematical Tools Certification",
      description: "Predictive Modelling & Feature Engineering - Score: 86%",
      icon: Brain,
      year: "2025",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-montserrat font-bold text-xl text-primary">Diksha Sharma</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">
                Achievements
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-montserrat font-black text-4xl md:text-6xl mb-6 text-foreground">
              Hi, I'm <span className="text-primary">Diksha Sharma</span>
            </h1>
            <FadingText
              items={["A Dedicated Learner", "An Aspiring AI/ML engineer", "A Coding Enthusiast"]}
              displayTime={1800}
              fadeTime={300}
              className="text-primary text-lg md:text-xl font-montserrat font-semibold mb-6"
            />
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              2nd-year B.Tech student in Computer Science & Engineering (AI & ML specialization) at MCKV Institute of
              Engineering
            </p>
            <p className="font-sans text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Passionate about software development, AI/ML, and open-source contribution. Always eager to learn and
              create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Send className="w-4 h-4" />
                </a>
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/diksha-041" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/diksha-sharma-874a48354/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Hello! I am a 2nd-Year Computer Science Student | AI & ML Specialist in Training.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                My current focus is mastering Data Structures, Algorithms, and the fundamentals of Python to build a
                strong base for developing machine learning applications.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                I am driven by curiosity and a desire to solve real-world problems through code. I believe in continuous
                learning and am always excited to take on new challenges.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me reading books or writing, as I believe these hobbies help me think
                more creatively and communicate better.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                This portfolio will track my growth and showcase my capabilities as they evolve.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Watch this space as I build and share my First Projects!
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden animate-float bg-white">
                <img
                  src="/images/diksha-photo.png"
                  alt="Portrait of Diksha Sharma"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const colStart =
                skill.name === "CSS" ? "lg:col-start-2" : skill.name === "Machine Learning" ? "lg:col-start-3" : ""

              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow duration-300 border-border ${colStart}`}
                >
                  <CardHeader className="text-center pb-4">
                    <skill.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="font-montserrat font-semibold text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">Projects</h2>
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-border">
              <CardHeader>
                <CardTitle className="font-montserrat font-semibold text-2xl text-primary">Future Scope</CardTitle>
                <CardDescription className="font-sans text-lg">Exciting projects coming soon!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground mb-6">
                  I'm currently working on several innovative projects that combine my passion for AI/ML and software
                  development. Stay tuned for updates on my GitHub profile!
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/diksha-041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
            Achievements
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="font-montserrat font-semibold text-xl">{achievement.title}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {achievement.year}
                        </Badge>
                      </div>
                      <CardDescription className="font-sans text-base mt-2">{achievement.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-12 text-foreground">Fun Facts</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-montserrat font-semibold text-xl">Avid Reader</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground">
                  I love diving into books across various genres. Reading helps me expand my perspective and fuels my
                  creativity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-montserrat font-semibold text-xl">Writing Enthusiast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-muted-foreground">
                  Writing is my way of expressing thoughts and ideas. It helps me communicate more effectively and think
                  more clearly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-foreground">Let's Connect!</h3>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to connect with fellow developers, potential mentors, and anyone interested in AI/ML
                and software development. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href="mailto:17.diksha.sharma2006@gmail.com"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    17.diksha.sharma2006@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a
                    href="https://github.com/diksha-041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/diksha-041
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/diksha-sharma-874a48354/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat font-semibold text-xl">Send a Message</CardTitle>
                <CardDescription className="font-sans">I'd love to hear from you!</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-input border-border" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="bg-input border-border" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} className="bg-input border-border" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-muted-foreground">© 2024 Diksha Sharma. Built with passion and dedication.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg z-50"
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
