const people = [
  {
    name: "Gus Fring",
    role: "Founder",
    imageUrl:
      "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    name: "Lalo Salamanca",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    name: "Jane",
    role: "Marketing",
    imageUrl:
      "https://images.pexels.com/photos/1321913/pexels-photo-1321913.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    name: "Jesse",
    role: "CTO",
    imageUrl:
      "https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function About() {
  return (
    <div className="bg-white my-auto py-auto sm:py-auto font-quicksand">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 ">
            We're on a mission to waste vc money. All we do is host expensive
            meetups and spam our groups with "gm" every morning.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="object-cover  h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
