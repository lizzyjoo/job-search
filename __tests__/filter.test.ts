import { Job } from "../app/components/types";

function filterJobs(
  jobs: Job[],
  departmentFilter: string,
  locationFilter: string,
  typeFilter: string,
  searchTerm: string
): Job[] {
  let filteredJobs = jobs;

  // if a department is selected, filter by department
  if (departmentFilter !== "All") {
    filteredJobs = filteredJobs.filter(
      (job) => job.department === departmentFilter
    );
  }

  // if a location is selected, filter by location
  if (locationFilter !== "All") {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.includes(locationFilter)
    );
  }
  // if a type is selected, filter by type
  if (typeFilter !== "All") {
    filteredJobs = filteredJobs.filter((job) => job.type === typeFilter);
  }
  // if a search term is provided, filter by title
  if (searchTerm) {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filteredJobs;
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    department: "Software",
    location: ["Austin"],
    type: "Full-time",
  },
  {
    id: "2",
    title: "BCI Designer",
    department: "BCI Applications",
    location: ["New York"],
    type: "Contract",
  },
];

describe("filterJobs", () => {
  test("returns all jobs with no filters applied", () => {
    const result = filterJobs(mockJobs, "All", "All", "All", "");
    expect(result).toHaveLength(2); // two test
  });

  test("filter by department", () => {
    const result = filterJobs(mockJobs, "Software", "All", "All", "");
    expect(result).toHaveLength(1);
  });
});
