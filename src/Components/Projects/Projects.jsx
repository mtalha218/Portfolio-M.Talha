
import { useEffect } from "react"
import {   useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "../ui/card"

const Projects = () => {
  const { inView, ref } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {

      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 2,
          delay: 0.5,
        },
      });
    }
  }, [inView]);

  const features = [
    {
      id: "editor",
      title: `3d Semantic Clustering using Ai`,
      description: `A 3D web application for users to explore large image datasets, navigate through related images using AI, reach a target image and record stattistics. (Research purposes)`,
      thumbnail: "/images/features/editor.webp",
      demo: "/videos/semantic.webm",
      theme:"dark"
    },
    {
      id: "reminder",
      title: `Custom AI Assistant for Doctors`,
      description: `Specialized chatbots for managing appointments and sessions, while providing patients with accurate answers from an evolving medical knowledge base.`,
      thumbnail: "/images/features/reminder.webp",
      demo: "/videos/clinicflow.mp4",
      theme:"light"
    },
    {
      id: "reminder",
      title: `AI Market Watch`,
      description: `An AI-powered web scraping project designed to provide investors and finance departments with real-time insights on the latest trends and news`,
      thumbnail: "/images/features/reminder.webp",
      demo: "/videos/marketwatch.mp4",
      theme:"dark"
    },
    {
      id: "reminder",
      title: `AI Storybook Generator`,
      description: `A project utilizing generative AI to create personalized and engaging storybooks for children, fostering a love for reading with unique, tailored narratives.`,
      thumbnail: "/images/features/reminder.webp",
      demo: "/videos/playbook.mp4",
      theme:"light"
    },
    {
      id: "reminder",
      title: `AI Medical Assistant`,
      description: `An AI-driven medical assistant designed to provide accurate and personalized healthcare recommendations based on extensive medical datasets.`,
      thumbnail: "/images/features/reminder.webp",
      demo: "/videos/medbox.mp4",
      theme:"light"
    }
  ]

  return (
    <section ref={ref} id="projects" className="mt-[10vh] !px-[5%]">
      <h2
        id="reveal-anim"
        className="skills-heading text-white text-center"
      >
        A Glimpse of Brilliance,{" "}<br />
        <span className="">
          Some Projects
        </span>
      </h2>

      <div id="reveal-anim">
      <div ref={ref} className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2">
      {features.map((feature,index) => (
        <Card className="overflow-hidden border-[#555555]" key={index} id="reveal-anim">
          <CardContent className="space-y-10 p-0">
            <div className="space-y-5 px-6 py-8">
              <h3 className="text-center skills-heading text-white !text-2xl">
                {feature.title}
              </h3>
              <p className="text-center text-white skills-detail !text-lg">
                {feature.description}
              </p>
            </div>
            <div className="relative ">
              <div className="absolute inset-0 -top-1 left-9 z-0 rounded-md bg-primary-gradient" />
              <video
                autoPlay
                loop
                muted
                width={800}
                height={600}
                poster={feature.thumbnail}
                className="relative z-10 ml-10 rounded-md object-cover"
              >
                <source src={feature.demo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
      </div>
    </section>
  )
}

export default Projects
