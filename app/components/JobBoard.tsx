"use client";

import React, { useEffect, useState } from "react";
import JobFilter from "./JobFilter";
import { Job } from "./types";

// receive jobs as props
export default function JobBoard({ jobs }: { jobs: Job[] }) {
  // filter logic: department, location, type
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <JobFilter
      jobs={jobs}
      filteredJobs={filteredJobs}
      departmentFilter={departmentFilter}
      setDepartmentFilter={setDepartmentFilter}
      locationFilter={locationFilter}
      setLocationFilter={setLocationFilter}
      typeFilter={typeFilter}
      setTypeFilter={setTypeFilter}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  );
}
