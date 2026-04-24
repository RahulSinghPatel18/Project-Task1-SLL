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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Zustand Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time state management demo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Counter Card */}
          <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                ➊
              </span>
              Counter
            </h2>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
                {count}
              </div>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={increment}
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 hover:from-green-600"
                >
                  +
                </button>
                <button 
                  onClick={decrement}
                  className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-2xl font-bold text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 hover:from-red-600"
                >
                  −
                </button>
              </div>
            </div>
          </div>

          {/* User Card */}
          <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 md:col-span-1">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
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
                className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-lg shadow-sm hover:shadow-md"
                placeholder="Your name..."
              />
            </div>
          </div>

          {/* Company Card */}
          <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 md:col-span-1">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
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
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 shadow-sm hover:shadow-md"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 shadow-sm hover:shadow-md"
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