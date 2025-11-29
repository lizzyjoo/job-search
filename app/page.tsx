import JobBoard from "./components/JobBoard";

export default async function Page() {
  // response object
  const result = await fetch(
    "https://gist.githubusercontent.com/lizzyjoo/350effdb1cfab92af924f0017301de10/raw/ec31a74f78a7515a9ff1400fb04441cf88d9227e/jobs.json"
  );
  const jobs = await result.json();

  // need to define client component to use useState and useEffect

  return <JobBoard jobs={jobs} />;
}
