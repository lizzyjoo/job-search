import { JobFilterProps } from "./types";

export default function JobFilter({
  departmentFilter,
  setDepartmentFilter,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  searchTerm,
  setSearchTerm,
  departments,
  locations,
  types,
}: JobFilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative center flex">
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="text-xl outline-none appearance-none bg-neutral-100 rounded-3xl p-2 pr-8 w-full md:w-auto"
          >
            <option className="" value="All">
              Department
            </option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4997 25.4389L15.5005 2.64676L14.5005 2.64673L14.4997 25.4391L4.75612 15.6955L4.04901 16.4026L14.6461 26.9997L14.9996 27.3532L15.3532 26.9997L25.951 16.4019L25.2439 15.6948L15.4997 25.4389Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="relative center flex">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className=" text-xl outline-none appearance-none bg-neutral-100 rounded-3xl p-2 pr-8 w-full md:w-auto"
          >
            <option value="All">Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4997 25.4389L15.5005 2.64676L14.5005 2.64673L14.4997 25.4391L4.75612 15.6955L4.04901 16.4026L14.6461 26.9997L14.9996 27.3532L15.3532 26.9997L25.951 16.4019L25.2439 15.6948L15.4997 25.4389Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="relative center flex">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="text-xl outline-none appearance-none bg-neutral-100 rounded-3xl p-2 pl-4 pr-8 w-full md:w-auto"
          >
            <option value="All">Type</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4997 25.4389L15.5005 2.64676L14.5005 2.64673L14.4997 25.4391L4.75612 15.6955L4.04901 16.4026L14.6461 26.9997L14.9996 27.3532L15.3532 26.9997L25.951 16.4019L25.2439 15.6948L15.4997 25.4389Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="relative  md:w-1/2">
        <input
          type="search"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" bg-neutral-100 outline-none rounded-3xl block w-3/5 p-3 ps-9  text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-body"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
