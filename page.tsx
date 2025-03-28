"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    publications: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop
          const height = ref.current.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Badge className="mb-4 px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
                  Agriculture Specialist
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  Anish <span className="text-green-600 dark:text-green-400">Gyawali</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                  B.Sc. Agriculture | Sustainable Farming Specialist
                </h2>
              </motion.div>

              <motion.p
                className="text-gray-700 dark:text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Committed to advancing climate-resilient agriculture and rural development with expertise in sustainable
                farming practices and agri-economics.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-6"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30"
                  onClick={() => scrollToSection("experience")}
                >
                  View Experience
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image src="/profile-image.png" alt="Anish Gyawali" fill className="object-cover" priority />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="h-10 w-10 text-green-600 dark:text-green-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-25"></div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                  <Image src="/formal-image.png" alt="Anish Gyawali Formal" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 dark:bg-green-900/50 rounded-full z-[-1]"></div>
              </div>
            </div>

            <div className="md:w-3/5">
              <Badge className="mb-4 px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Passionate About <span className="text-green-600 dark:text-green-400">Sustainable Agriculture</span>
              </h2>

              <motion.div
                className="space-y-4 text-gray-700 dark:text-gray-300"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.p variants={item}>
                  An Agriculture graduate with a strong foundation in agri-economics and sustainable farming, committed
                  to advancing climate-resilient agriculture and rural development. I possess a deep understanding of
                  agroecosystems, soil conservation, and sustainable crop production.
                </motion.p>
                <motion.p variants={item}>
                  I'm skilled in implementing eco-friendly agricultural practices, conducting field research, and
                  leveraging data-driven approaches for decision-making. Adept at community engagement, empowering local
                  farmers, and promoting innovative solutions to enhance food security and improve livelihoods.
                </motion.p>
                <motion.p variants={item}>
                  I'm passionate about integrating modern agricultural technologies to foster sustainable development
                  and drive impactful change in the agricultural sector.
                </motion.p>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-900">
                  Sustainable Farming
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900">
                  Climate-Resilient Agriculture
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-100 hover:bg-amber-200 dark:hover:bg-amber-900">
                  Agri-Economics
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-900">
                  Food Security
                </Badge>
                <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-100 hover:bg-teal-200 dark:hover:bg-teal-900">
                  Rural Development
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={sectionRefs.education}
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              Academic Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Education & <span className="text-blue-600 dark:text-blue-400">Qualifications</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-green-400 rounded"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <TimelineItem
                  year="2019-2023"
                  title="Bachelor of Science in Agriculture"
                  institution="Institute of Agriculture and Animal Science, Tribhuvan University"
                  description="Graduated with 73.6%, First Division"
                  color="blue"
                  align="right"
                />

                <TimelineItem
                  year="2017"
                  title="10+2 in Science, Major-Biology"
                  institution="Kanti Secondary School, National Education Board"
                  description="Completed with First Division"
                  color="teal"
                  align="left"
                />

                <TimelineItem
                  year="2015"
                  title="Nepal School Leaving Certificate (SLC)"
                  institution="Shree Banganga Secondary School, SLC Board"
                  description="Completed with First Division"
                  color="green"
                  align="right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={sectionRefs.skills}
        className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
              Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My <span className="text-purple-600 dark:text-purple-400">Skills & Abilities</span>
            </h2>
          </motion.div>

          <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical" className="text-sm md:text-base">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="personal" className="text-sm md:text-base">
                Personal Skills
              </TabsTrigger>
              <TabsTrigger value="leadership" className="text-sm md:text-base">
                Leadership
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <motion.div
                    className="space-y-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <SkillBar skill="Project Planning & Implementation" percentage={92} color="green" />
                    <SkillBar skill="Climate-Resilient Agriculture" percentage={88} color="emerald" />
                    <SkillBar skill="Statistical Tools (R, SAS, SPSS)" percentage={85} color="blue" />
                    <SkillBar skill="Spatial Analysis (ArcGIS)" percentage={80} color="indigo" />
                    <SkillBar skill="Community Empowerment & Stakeholder Coordination" percentage={90} color="purple" />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personal" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <motion.div
                    className="space-y-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <SkillBar skill="Organization & Efficiency" percentage={95} color="amber" />
                    <SkillBar skill="Problem-Solving & Stress Management" percentage={90} color="orange" />
                    <SkillBar skill="Leadership & Teamwork" percentage={92} color="red" />
                    <SkillBar skill="Written & Verbal Communication" percentage={88} color="pink" />
                    <SkillBar skill="Adaptability & Learning" percentage={94} color="purple" />
                    <SkillBar skill="Critical Thinking & Analysis" percentage={89} color="blue" />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leadership" className="mt-4">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Youth for Environment and Social Transformation (YEAST)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Former President and Secretary, leading initiatives for environmental conservation and social
                      development.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Youth for Conservation and Sustainable Agriculture (YCSA)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Former member, contributing to sustainable agricultural practices and conservation efforts.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                      Local Youth Organizations
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Experience leading various youth organizations at the local level, organizing community events and
                      development programs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        ref={sectionRefs.publications}
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
              Research
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Scholarly <span className="text-amber-600 dark:text-amber-400">Publications</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="h-3 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                <div className="p-6">
                  <Badge className="mb-3 bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-100">
                    Published Review
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Heat Stress Effect on Wheat
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A comprehensive review of how heat stress affects wheat production, growth patterns, and yield.
                  </p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">DOI:</span>
                    <a
                      href="https://doi.org/10.26480/itechmag.03.2021.05.08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-amber-600 dark:text-amber-400 hover:underline flex items-center"
                    >
                      10.26480/itechmag.03.2021.05.08
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="h-3 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                <div className="p-6">
                  <Badge className="mb-3 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-100">
                    Thesis
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Assessment of Economic Efficiency of Rice Production in Rupandehi District
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Research focused on analyzing the economic efficiency of rice production systems in the Rupandehi
                    District, identifying factors affecting productivity and profitability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="h-3 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                <div className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100">
                    Under Review
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Assessment of Technical Efficiency of Rice Production in the Rupandehi District of Nepal
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Analysis of technical aspects affecting rice production efficiency, including farming techniques,
                    resource utilization, and technological adoption.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="h-3 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <div className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-100">
                    Under Review
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Assessment of Allocative Efficiency of Rice Production in the Rupandehi District of Nepal
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Study on resource allocation efficiency in rice production, examining how farmers distribute inputs
                    to maximize output and profitability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={sectionRefs.experience}
        className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-950 dark:to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-100 dark:bg-teal-900/20 rounded-full opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
              Professional Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Work <span className="text-teal-600 dark:text-teal-400">Experience</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            <ExperienceCard
              title="Field Officer"
              company="FORWARD Nepal | YUVA Project"
              period="2024 – 2025"
              description={[
                "Supported youth entrepreneurs in adopting innovative horticultural practices to enhance productivity and income",
                "Coordinated with stakeholders to strengthen market linkages and access to agricultural resources",
                "Monitored project activities, ensuring effective implementation and reporting outcomes",
              ]}
              color="teal"
            />

            <ExperienceCard
              title="Intern"
              company="Kernel Agro Farm Research & Training Centre"
              location="Buddhabhumi-2, Kapilvastu"
              period="Feb 2024 – Oct 2024"
              description={[
                "Gained hands-on experience in vegetable farming, including seed selection, nursery management, and soil preparation",
                "Assisted in integrated pest management, irrigation scheduling, and post-harvest handling",
                "Applied modern and sustainable farming techniques to enhance vegetable production",
              ]}
              color="blue"
            />

            <ExperienceCard
              title="Assistant Manager"
              company="Gyawali Agro Farm (Own)"
              location="Kapilvastu, Nepal"
              period="2020-2024"
              description={[
                "Managed daily operations of Gyawali Agro Farm, focusing on seasonal and off-seasonal vegetable production using organic and integrated pest management techniques",
                "Supervised farm workers to optimize operations and achieve high-quality yields",
              ]}
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={sectionRefs.projects}
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
              Research Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Notable <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-2">Straw Mushroom</h3>
                      <p className="text-indigo-100">Pleurotus Ostreatus</p>
                      <p className="mt-2 text-xs text-indigo-200">Rupandehi, Nepal (2023)</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Study of Commercial Cultivation Procedure of Pleurotus Ostreatus
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Conducted comprehensive research on commercial cultivation methods for straw mushrooms, analyzing
                      optimal growing conditions, substrate preparation techniques, and yield optimization strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-100">
                        Mushroom Cultivation
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-100">
                        Commercial Farming
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100">
                        Yield Optimization
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/30"
              >
                More Projects Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100">
              Knowledge Sharing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Programs & <span className="text-pink-600 dark:text-pink-400">Training</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <TrainingCard
              title="Seasonal Vegetable Production"
              description="Facilitated training on seasonal vegetable production and organic farming techniques for local farmers"
              icon="🌱"
              color="green"
            />

            <TrainingCard
              title="Biochar Training"
              description="Coordinated biochar training for students in collaboration with Plant Village Nepal"
              icon="🔥"
              color="amber"
            />

            <TrainingCard
              title="Clean Energy Technologies"
              description="Conducted workshops on clean energy technologies for rural farming applications"
              icon="⚡"
              color="blue"
            />

            <TrainingCard
              title="Training of Trainers (ToT)"
              description="Completed Training of Trainers program for capacity building and knowledge transfer"
              icon="👨‍🏫"
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Language Section */}
      <section
        id="languages"
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
              Communication
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Language <span className="text-orange-600 dark:text-orange-400">Proficiency</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
                <div className="h-2 bg-gradient-to-r from-orange-400 to-red-400"></div>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300 mb-4">
                    <span className="text-2xl">🇳🇵</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nepali</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Advanced</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-orange-400 to-red-400 h-2.5 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-64"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
                    <span className="text-2xl">🇬🇧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">English</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Intermediate (IELTS – 6.5)</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/20 text-white backdrop-blur-sm">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Contact <span className="text-green-200">Me</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-green-100">+977-9867230656</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-green-100">gyawalianish91@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-green-100">Banganga-8, Kapilvastu, Nepal</p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="https://www.linkedin.com/in/anish-gyawali-1981962a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Connect on LinkedIn
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Anish Gyawali. All rights reserved.</p>
          <p className="mt-2 text-gray-400">B.Sc. Agriculture | Sustainable Farming Specialist</p>
        </div>
      </footer>
    </main>
  )
}

// Component for Timeline Items
function TimelineItem({ year, title, institution, description, color, align }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    teal: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  }

  const dotColorClasses = {
    blue: "bg-blue-400 dark:bg-blue-500",
    green: "bg-green-400 dark:bg-green-500",
    teal: "bg-teal-400 dark:bg-teal-500",
  }

  return (
    <motion.div
      className={`relative flex items-center ${align === "left" ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 md:w-1/2"></div>

      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10">
        <div className={`w-full h-full rounded-full ${dotColorClasses[color]}`}></div>
      </div>

      <div className="flex-1 md:w-1/2 pl-10 md:pl-16 md:pr-0">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${colorClasses[color]}`}>
            {year}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{institution}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Component for Skill Bars
function SkillBar({ skill, percentage, color }) {
  const colorClasses = {
    green: "from-green-400 to-emerald-500",
    emerald: "from-emerald-400 to-teal-500",
    blue: "from-blue-400 to-indigo-500",
    indigo: "from-indigo-400 to-purple-500",
    purple: "from-purple-400 to-pink-500",
    amber: "from-amber-400 to-orange-500",
    orange: "from-orange-400 to-red-500",
    red: "from-red-400 to-pink-500",
    pink: "from-pink-400 to-purple-500",
  }

  // Define item variable for animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-2" variants={item}>
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`bg-gradient-to-r ${colorClasses[color]} h-2.5 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

// Component for Experience Cards
function ExperienceCard({ title, company, location, period, description, color }) {
  const colorClasses = {
    green: "from-green-500 to-emerald-600",
    blue: "from-blue-500 to-indigo-600",
    teal: "from-teal-500 to-cyan-600",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className={`h-2 bg-gradient-to-r ${colorClasses[color]}`}></div>
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {title}
            </h3>
            <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">{period}</Badge>
          </div>

          <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{company}</p>

          {location && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex items-center">
              <MapPin className="h-4 w-4 mr-1" /> {location}
            </p>
          )}

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {description.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

// Component for Training Cards
function TrainingCard({ title, description, icon, color }) {
  const colorClasses = {
    green: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    blue: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    amber: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
    purple: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
  }

  const iconColorClasses = {
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
    amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className={`bg-gradient-to-r ${colorClasses[color]} p-6 rounded-xl shadow-md h-full`}>
        <div className={`w-12 h-12 ${iconColorClasses[color]} rounded-full flex items-center justify-center mb-4`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

