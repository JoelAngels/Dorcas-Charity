import { BookOpen, GraduationCap, School } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "School Fees Support",
    description:
      "We provide financial assistance to students who cannot afford school fees, ensuring they can continue their education without interruption.",
  },
  {
    icon: School,
    title: "School Supplies",
    description:
      "We distribute essential school supplies including textbooks, notebooks, and other learning materials to students in need.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship Program",
    description:
      "Our mentorship program connects students with successful professionals who provide guidance and support throughout their academic journey.",
  },
];

export default function Programs() {
  return (
    <section className="py-20" id="programs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-white">
            We offer various programs designed to support students in their
            educational journey and ensure they have the resources they need to
            succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex p-3 rounded-full bg-red-50 mb-4">
                <program.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
