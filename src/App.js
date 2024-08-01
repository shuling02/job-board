import './App.css';
import FilteredSearchBar from './Components/FilteredSearch';
import { JobBoardData } from './Components/JobBoardData';





//Object.entries(res).forEach((entry) => {
//const [key, value] = entry;
//console.log(`${key}: ${value}`);
//});


export default function App() {
  return (
    
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900 centered-heading">Fall 2023 Internships</h1>
            <p className="mt-2 text-sm text-gray-700">
            <FilteredSearchBar/>
              A list of all the jobs including their Company, CompanyDomain, Link, Role, Location, Type, and Tags.
            </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Company
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Link
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Location
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {JobBoardData.map((job) => (
                  <tr key={job.company} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 centered-heading">
                      {job.company}
                      <img className="image-size" src={`https://logo.clearbit.com/${job.companyDomain}`} alt="" />
                    </td>
                    <a href={job.link} target="_blank" rel="noopener noreferrer">Link</a>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 centered-heading">{job.role}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 centered-heading">{job.location}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 centered-heading">{job.type}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 centered-heading">{job.tags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

