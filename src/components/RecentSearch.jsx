function RecentSearch({ recentHistory, setRecentHistory, setSelectedHistory }) {
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const clearSelectedHistory = (selectedItem) => {
    let history = JSON.parse(localStorage.getItem('history'));
    history = history.filter((item) => item !== selectedItem);
    setRecentHistory(history);
    localStorage.setItem('history', JSON.stringify(history));
  };

  return (
    <div className="col-span-1 dark:bg-zinc-800 bg-red-100 pt-5 px-3 border-r border-zinc-200 dark:border-zinc-700 transition-all">
      <h1 className="text-xl font-bold dark:text-white text-zinc-800 flex justify-between items-center mb-4">
        Recent Search
        <button
          onClick={clearHistory}
          className="p-1 bg-zinc-600 hover:bg-zinc-800 text-white rounded transition-colors"
          title="Clear all history"
        >
          ✕
        </button>
      </h1>

      <ul className="overflow-auto max-h-[80vh] space-y-2 pr-1">
        {recentHistory &&
          recentHistory.map((item, index) => (
            <div
              key={item + index}
              className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-700 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
            >
              <li
                onClick={() => setSelectedHistory(item)}
                className="flex-1 px-4 py-2 truncate cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-red-200 dark:hover:bg-zinc-600 transition-colors"
              >
                {item}
              </li>
              <button
                onClick={() => clearSelectedHistory(item)}
                className="px-3 py-2 bg-zinc-600 hover:bg-zinc-800 text-white transition-colors"
                title="Delete this item"
              >
                ✕
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default RecentSearch;



