import Link from "next/link";

export default function AboutPage() {
  const team = [
    { name: "Milo Margolis", title: "CEO", image: "/headshot.jpg" },
    { name: "David Rooney", title: "CTO", image: "/headshots/person2.jpg" },
    {
      name: "Rowan Frew",
      title: "Product Lead",
      image: "/headshots/person3.jpg",
    },
    { name: "Willem Shak", title: "Engineer", image: "/headshots/person4.jpg" },
    {
      name: "Lubiana Malvi",
      title: "Engineer",
      image: "/headshots/person5.jpg",
    },
    { name: "Josh Segal", title: "Marketing", image: "/headshots/person6.jpg" },
    { name: "Jesse Goldberg", title: "Sales", image: "/headshots/person7.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-20 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Meet the Team
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
        We’re a small team passionate about building better leasing experiences
        with AI.
      </p>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {team.map((person, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {person.name}
            </h3>
            <p className="text-gray-500">{person.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
