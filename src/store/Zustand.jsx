import useAppStore from "./useAppStore";

const Zustand = () => {
  const {
    count,
    increment,
    decrement,
    name,
    setName,
    company,
    year,
    setCompany,
    setYear,
  } = useAppStore();

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-5xl font-bold text-transparent md:text-8xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text">
            Zustand Store
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Real-time state management demo
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Counter Card */}
          <div className="p-8 transition-all duration-300 border border-indigo-100 shadow-xl group bg-white/70 backdrop-blur-sm rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90">
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-indigo-600">
              <span className="flex items-center justify-center w-10 h-10 text-indigo-600 bg-indigo-100 rounded-2xl">
                ➊
              </span>
              Counter
            </h2>
            <div className="text-center">
              <div className="mb-8 text-5xl font-bold text-gray-900 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
                {count}
              </div>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={increment}
                  className="w-16 h-16 text-2xl font-bold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl hover:shadow-xl hover:scale-110 hover:from-green-600"
                >
                  +
                </button>
                <button 
                  onClick={decrement}
                  className="w-16 h-16 text-2xl font-bold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl hover:shadow-xl hover:scale-110 hover:from-red-600"
                >
                  −
                </button>
              </div>
            </div>
          </div>

          {/* User Card */}
          <div className="p-8 transition-all duration-300 border border-indigo-100 shadow-xl group bg-white/70 backdrop-blur-sm rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 md:col-span-1">
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-indigo-600">
              <span className="flex items-center justify-center w-10 h-10 text-indigo-600 bg-indigo-100 rounded-2xl">
                ➋
              </span>
              User
            </h2>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text">
                {name || 'Enter name'}
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 text-lg transition-all duration-200 border border-gray-200 shadow-sm outline-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:shadow-md"
                placeholder="Your name..."
              />
            </div>
          </div>

          {/* Company Card */}
          <div className="p-8 transition-all duration-300 border border-indigo-100 shadow-xl group bg-white/70 backdrop-blur-sm rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 md:col-span-1">
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-indigo-600">
              <span className="flex items-center justify-center w-10 h-10 text-indigo-600 bg-indigo-100 rounded-2xl">
                ➌
              </span>
              Company
            </h2>
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gray-800">
                {company || 'Company'} ({year || 'Year'})
              </div>
              <div className="space-y-3">
                <input
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-4 transition-all duration-200 border border-gray-200 shadow-sm outline-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:shadow-md"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full p-4 transition-all duration-200 border border-gray-200 shadow-sm outline-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zustand;