export interface Job {
  id: string;
  title: string;
  department: string;
  location: string[];
  type: string;
}

export interface JobFilterProps {
  departmentFilter: string;
  setDepartmentFilter: (value: string) => void;
  locationFilter: string;
  setLocationFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  departments: string[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  locations: string[];
  types: string[];
}

export interface JobListProps {
  jobsByDepartment: Record<string, Job[]>;
}

export interface JobCardProps {
  job: Job;
}
export interface dept {
  name: string;
}

export interface loc {
  name: string;
}

export interface type {
  name: string;
}
