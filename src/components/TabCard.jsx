import { Link } from "react-router-dom";

export default function TabCard({ job }) {
  const {
    _id,
    job_title,
    description,
    category,
    min_price,
    max_price,
    deadline,
  } = job || {};

  return (
    <Link
      to={`/job/${_id}`}
      className="group block w-full max-w-sm overflow-hidden"
    >
      {/* Card Container with fixed height */}
      <div className="h-[300px] w-full bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-50 before:to-blue-100/50 before:opacity-0 before:transition-opacity hover:before:opacity-100">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-tr-full" />

        <div className="relative h-full flex flex-col p-6 z-10">
          <div>
            {/* Category and Deadline */}
            <div className="flex justify-between items-center mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm">
                {category}
              </span>
              <div className="text-gray-500 text-sm bg-gray-50 px-3 py-1 rounded-full">
                {deadline}
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 min-h-[56px]">
              {job_title}
            </h2>

            <p
              title={description}
              className="text-gray-600 text-sm line-clamp-3 min-h-[60px]"
            >
              {description}
            </p>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-semibold text-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 rounded-lg">
                  ${min_price.toLocaleString()} - ${max_price.toLocaleString()}
                </span>
              </div>

              {/* Animated View Details Button */}
              <div className="flex items-center space-x-1 text-blue-600 font-medium">
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                  View Details
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
