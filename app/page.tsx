import JobBoard from "./components/JobBoard";

export default async function Page() {
  // response object
  const result = await fetch(
    "https://gist.githubusercontent.com/lizzyjoo/350effdb1cfab92af924f0017301de10/raw/17bb47ac3bd0fe26006cb01052e4b0e5426b7274/jobs.json"
  );
  const jobs = await result.json();

  // need to define client component to use useState and useEffect

  return <JobBoard jobs={jobs} />;
}
