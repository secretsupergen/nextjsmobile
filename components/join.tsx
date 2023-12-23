
const people = Array(20).fill(
  {
    name: 'Crissy Nguyen',
    invite: 'crissynguyen',
    time: '3 minutes ago',
    image:
      '/images/avatar.png',
  });

export default function Join () {
  
  return (
    <div className="pb-4 sm:pb-12 w-full sm:w-[300px]">
      <div className="flex flex-row items-end justify-between my-4 sm:my-6">
        <h1 className="text-2xl text-primary font-bold leading-tight tracking-normal">Recent Joins</h1>
      </div>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="overflow-auto w-full sm:h-[70vh] scrollbar-hide">
        <ul className="sm:divide-y divide-gray-800 flex flex-row sm:block">
          {people.map((person, id) => (
            <li key={id} className="shrink-0">
              <div className="flex items-center gap-4 py-2 px-2">
                <img className="h-12 w-12 flex-none rounded-full border-2 border-text border-opacity-30" src={person.image} alt="" />
                <div className="hidden sm:flex sm:flex-col sm:items-start sm:gap-1">
                  <div className="flex items-center justify-between gap-2 w-fit">
                    <p className="text-lg text-primary font-semibold max-w-[120px] whitespace-nowrap overflow-hidden text-ellipsis">{person.name}</p>
                    <p className="text-md text-secondary font-semibold whitespace-nowrap">{person.time}</p>
                  </div>
                  <p className="text-start text-md text-secondary font-semibold whitespace-nowrap">Invited by {person.invite}</p>
                </div>
                <div>

                <div className="flex flex-col items-start sm:hidden"> 
                    <p className="text-lg text-primary font-semibold whitespace-nowrap">{person.name}</p>
                    <p className="text-md text-secondary font-semibold whitespace-nowrap">{person.time}</p>
                    <p className="text-start text-md text-secondary font-semibold whitespace-nowrap">Invited by {person.invite}</p>
                </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}