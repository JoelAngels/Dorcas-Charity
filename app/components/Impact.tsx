import { GraduationCap, Users, School, Heart } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "500+",
    label: "Students Supported",
  },
  {
    icon: Users,
    value: "100+",
    label: "Volunteers",
  },
  {
    icon: School,
    value: "50+",
    label: "Partner Schools",
  },
  {
    icon: Heart,
    value: "1000+",
    label: "Lives Impacted",
  },
];

export default function Impact() {
  return (
    <section className="py-20 bg-gray-50" id="impact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through the generous support of our donors and volunteers,{" "}
            {" we've"}
            made a significant difference in the lives of students across Kenya.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex p-3 rounded-full bg-blue-50 mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-2 text-black">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
