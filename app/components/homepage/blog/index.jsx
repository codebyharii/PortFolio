// @flow strict
import { FaTrophy } from "react-icons/fa";

const achievements = [
  "Solved 300+ DSA Problems",
  "Built Multiple Spring Boot Backend Projects",
  "Developed Machine Learning Models",
  "Created AI Based Applications"
];

function Blog() {

  return (
    <div id='achievements' className="border-t my-12 lg:my-24 border-[#25213b]">

      {/* Achievements Heading */}
      <div className="flex justify-center my-10">
        <h2 className="text-3xl font-bold text-white">
          Achievements
        </h2>
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {achievements.map((item, i) => (
          <div
            key={i}
            className="bg-[#1b203e] border border-[#25213b] p-5 rounded-lg flex items-center gap-4 hover:border-violet-500 transition"
          >
            <FaTrophy className="text-violet-500 text-xl" />
            <p className="text-gray-300">{item}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Blog;
