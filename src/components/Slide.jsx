export default function Slide({ image, headline, subHeadline }) {
  return (
    <div
      className="w-full bg-center bg-cover h-[calc(100vh-68px)] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            {headline}
          </h1>
          <p className="text-xl text-gray-200">{subHeadline}</p>
          <br />
          <button className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500 hover:border-b-2 border-t-2 hover:border-t-0">
            Post Job & Hire Expert
          </button>
        </div>
      </div>
    </div>
  );
}
