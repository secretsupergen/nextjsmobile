
const people = Array(500).fill(
  {
    name: 'Thomas James',
    invite: 'airdrop',
    point: '314,103',
    image:
      '/images/avatar.png',
  });

export default function Board () {
  
  return (
    <div className="grow pb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <h1 className="text-2xl sm:text-5xl text-primary font-bold leading-tight tracking-normal">Leaderboard</h1>
        <h2 className="text-md sm:text-lg text-secondary text-start sm:text-end">Bridge @ Invite friends to rank up</h2>
      </div>
      <div className="overflow-auto w-full h-[70vh] scrollbar-hide">
        <table role="list" className="w-full animate-enter-fade px-4">
          <thead className="sticky top-0 backdrop-blur-lg">
            <tr>
              <th className="p-0">
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="min-w-[80px] text-xl text-center text-secondary uppercase py-2">
                  Rank
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
              </th>
              <th className="p-0">
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="text-start min-w-[300px] text-xl text-secondary uppercase py-2 pl-6">
                  Name
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
              </th>
              <th className="p-0">
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="text-center min-w-[120px] text-xl text-secondary uppercase py-2 px-6 whitespace-nowrap">
                  Invited by
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
              </th>
              <th className="p-0">
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="text-end min-w-[80px] text-xl text-secondary uppercase py-2 pr-6">
                  Points
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {people.map((person, id) => (
              <tr key={id}>
                <td className="py-4">
                  <h3 className="text-3xl text-center text-primary font-semibold bg-black mx-2">{id + 1}</h3>
                </td>
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-4">
                    <img className="h-12 w-12 flex-none rounded-full border-2 border-text border-opacity-30" src={person.image} alt="" />
                    <p className="text-2xl text-secondary font-semibold">{person.name}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="text-center text-xl text-secondary font-semibold">{person.invite}</p>
                </td>
                <td className="py-4 pr-4">
                  <p className="text-end text-2xl tracking-widest font-logo text-secondary">{person.point}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}