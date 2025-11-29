import { JobListProps } from "./types";
import JobCard from "./JobCard";

export default function JobList({ jobsByDepartment }: JobListProps) {
  return (
    <>
      {Object.entries(jobsByDepartment).map(([department, deptJobs]) => (
        <div
          key={department}
          className="grid grid-cols-1 md:grid-cols-2 border-neutral-300 border-b py-20 gap-20"
        >
          <div className="">
            <h1 className="text-3xl font-semibold mb-4">{department}</h1>
          </div>
          <div className="pb-20">
            {deptJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
