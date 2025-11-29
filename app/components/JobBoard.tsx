"use client";

import React, { useEffect, useState } from "react";
import JobFilter from "./JobFilter";
import JobList from "./JobList";
import { Job } from "./types";
import Header from "./Header";

// receive jobs as props
export default function JobBoard({ jobs }: { jobs: Job[] }) {
  // filter logic: department, location, type
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // extract unique deparments, locations, types from jobs list
  const departments = [...new Set(jobs.map((job) => job.department))];
  const locations = [...new Set(jobs.flatMap((job) => job.location))]; // flatten array of arrays
  const types = [...new Set(jobs.map((job) => job.type))];

  // pass down filter states, setters, and all lists to Filter component
  useEffect(() => {
    // copy of job list
    let updatedJobs = jobs;

    if (departmentFilter !== "All") {
      updatedJobs = updatedJobs.filter(
        (job) => job.department === departmentFilter
      );
    }
    if (locationFilter !== "All") {
      updatedJobs = updatedJobs.filter((job) =>
        job.location.includes(locationFilter)
      );
    }
    if (typeFilter !== "All") {
      updatedJobs = updatedJobs.filter((job) => job.type === typeFilter);
    }

    if (searchTerm) {
      updatedJobs = updatedJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredJobs(updatedJobs); // alternative seems to be using useMemo
  }, [jobs, departmentFilter, locationFilter, typeFilter, searchTerm]);

  const jobsByDepartment: Record<string, Job[]> = {};

  for (const job of filteredJobs) {
    if (!jobsByDepartment[job.department]) {
      jobsByDepartment[job.department] = [];
    }
    jobsByDepartment[job.department].push(job);
  }

  return (
    <>
      <div className="pl-8 md:pl-32 lg:pl-40">
        <Header />
        <JobFilter
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          departments={departments}
          locations={locations}
          types={types}
        />
        <JobList jobsByDepartment={jobsByDepartment} />
      </div>
    </>
  );
}
