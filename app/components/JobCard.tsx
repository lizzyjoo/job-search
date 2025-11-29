import { JobCardProps } from "./types";
export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="job-card p-4 pt-10 border-t  mb-4  transition-shadow border-neutral-300  ">
      <h2 className="text-2xl">{job.title}</h2>
      <p className="text-neutral-600 text-xl">
        Location: {job.location.join(", ")}
      </p>
      <p className="text-neutral-600">Type: {job.type}</p>
    </div>
  );
}
