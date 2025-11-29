# Job Listing Component with Filters

A responsive React component that displays a list of job openings with filtering functionality.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI
- **Testing:** Jest

## Component Structure and State Management

The application uses `useState` to manage filter states and `useEffect` to handle filtering logic.

- `departmentFilter`: tracks selected department
- `locationFilter`: tracks selected location
- `typeFilter`: tracks selected job type
- `searchTerm`: tracks search input
- `filteredJobs`: state based on applied filters

## Run the app locally

First, clone the repository:

```bash
git clone https://github.com/lizzyjoo/job-search.git
cd job-search
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Running Tests

```bash
npm test
```

Simple unit tests verify the filtering logic returns correct results when filtering.

## Data Source

Job data is fetched from a [GitHub Gist](https://gist.githubusercontent.com/lizzyjoo/350effdb1cfab92af924f0017301de10/raw/jobs.json) mock API endpoint. Mock data is inspired by Neuralink's public job listings.

## Deployment

Deployed on [Vercel](https://job-search-ten-orcin.vercel.app/).
