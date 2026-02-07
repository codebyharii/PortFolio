"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experienceAnim from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

export default function Experience() {
  return (
    <div id="experience" className="border-t my-12 lg:my-24 border-[#25213b]">

      <div className="flex justify-center my-8">
        <h2 className="text-2xl text-white font-semibold">
          Experiences
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <AnimationLottie animationPath={experienceAnim} />

        <div className="flex flex-col gap-6">

          {experiences.map((exp) => (

            <GlowCard
              key={exp.id}
              identifier={`experience-${exp.id}`}
            >
              <div className="p-4">

                <p className="text-green-400 text-sm">
                  {exp.duration}
                </p>

                <div className="flex items-center gap-4 mt-2">

                  <BsPersonWorkspace size={30} />

                  <div>
                    <p className="text-white font-semibold">
                      {exp.title}
                    </p>

                    <p className="text-gray-400">
                      {exp.company}
                    </p>
                  </div>

                </div>

              </div>
            </GlowCard>

          ))}

        </div>

      </div>

    </div>
  );
}
