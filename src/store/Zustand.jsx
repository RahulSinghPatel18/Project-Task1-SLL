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
    <div className="h-100% bg-slate-300 text-black flex flex-col items-center gap-8 p-10">

      {/* Counter */}
      <div className="p-6 text-center bg-green-50 rounded-xl w-80">
        <h2 className="text-xl font-bold text-indigo-400">Counter</h2>
        <p className="my-2 text-2xl">{count}</p>
        <div className="flex justify-center gap-10">
          <button onClick={increment} className="w-10 h-10 bg-green-500 rounded">+</button>
          <button onClick={decrement} className="w-10 h-10 bg-red-500 rounded">-</button>
        </div>
      </div>

      {/* User */}
      <div className="p-6 text-center bg-green-50 rounded-xl w-80">
        <h2 className="text-xl font-bold text-indigo-400">User</h2>
        <p className="mb-2">{name}</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-black rounded"
        />
      </div>

      {/* Company */}
      <div className="p-6 text-center bg-green-50 rounded-xl w-80">
        <h2 className="text-xl font-bold text-indigo-400">Company</h2>
        <p className="mb-2">
          {company} ({year})
        </p>

      <div className="h-20 w-30 bg-amber-200">
      <input
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 mb-2 text-black rounded"
        />

        <input
          type="number"
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-2 text-black rounded"
        />
      </div>
      </div>

    </div>
  );
};

export default Zustand;