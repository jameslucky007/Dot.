import React from 'react';

const Work = () => {
  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const dayLabels = ['Mon', 'Wed', 'Fri', 'Sun'];

  const CheckboxCell = ({ type }) => {
    // Shrunk slightly for mobile, returns to normal w-4 h-4 on sm screens and up
    let baseClass = "w-3 h-3 sm:w-4 sm:h-4 rounded border transition-colors cursor-default shrink-0";
    
    const typeClasses = {
      completed: "bg-yellow-400 border-black",
      current: "bg-black border-black shadow-[0_0_6px_1px_rgba(0,0,0,0.2)]",
      future: "bg-gray-100 border-gray-300",
      pending: "bg-white border-black"
    };

    return <div className={`${baseClass} ${typeClasses[type] || typeClasses.pending}`} />;
  };

  const Grid = () => {
    const totalCols = 53;
    const totalRows = 7;
    const currentDayCol = 43; 
    const currentDayRow = 1; 

    return (
      <div className="flex flex-col gap-1 p-2 sm:p-3 bg-white">
        <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: `repeat(${totalRows}, minmax(0, 1fr))` }}>
          {[...Array(totalCols)].map((_, col) => (
            [...Array(totalRows)].map((_, row) => {
              let type = 'pending';
              
              if (col > currentDayCol || (col === currentDayCol && row >= currentDayRow)) type = 'future';
              if (col === currentDayCol && row === currentDayRow) type = 'current';

              if (type === 'pending') {
                const seed = (col * totalRows + row) * 71 + 37;
                const isGap = (col > 10 && col < 15) || (col > 25 && col < 30) || row === 2 || row === 5;
                if ((seed % 100) / 100 < (isGap ? 0.95 : 0.8)) type = 'completed';
              }

              return <CheckboxCell key={`${col}-${row}`} type={type} />;
            })
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 flex justify-center items-center font-sans">
      <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-xl w-full max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 border border-gray-200">
        
        {/* Header - Stacks on mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-black" style={{ fontFamily: 'var(--font-mono), monospace' }}>
            Work out
          </h1>
          <button className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-black font-bold text-lg shadow-[4px_4px_0_0_black] bg-white text-black hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_black] transition-all">
            Mark Today
          </button>
        </div>

        {/* Graph Container - Horizontally scrollable on small screens */}
        <div className="relative w-full overflow-x-auto pb-2 custom-scrollbar">
          <div className="min-w-max flex items-start gap-2 sm:gap-3 pr-4">
            
            {/* Y-Axis Labels - Sticky so they don't disappear when scrolling right */}
            <div className="flex flex-col gap-[14px] sm:gap-[24px] pt-[20px] pr-2 text-right sticky left-0 bg-white z-10">
              {dayLabels.map(label => (
                <span key={label} className="text-[10px] sm:text-xs font-medium text-gray-500 leading-none">
                  {label}
                </span>
              ))}
            </div>

            {/* X-Axis Labels & Grid */}
            <div className="flex-grow flex flex-col gap-2">
              <div className="flex justify-between">
                {months.map((month, i) => (
                  <span key={i} className="flex-1 text-center text-[10px] sm:text-sm font-medium text-gray-900">
                    {month}
                  </span>
                ))}
              </div>
              <div className="bg-white rounded-lg shadow-inner border border-gray-100">
                <Grid />
              </div>
            </div>

          </div>
        </div>

        {/* Stats Section - 2x2 grid on mobile, inline on desktop */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-between items-stretch lg:items-end gap-4 sm:gap-6 mt-2">
          
          <div className="col-span-2 sm:col-span-1 flex flex-row gap-4 sm:gap-6 w-full">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_black] flex-1 lg:w-40 flex flex-col justify-center gap-1">
              <span className="text-3xl sm:text-5xl font-extrabold text-black tracking-tighter">29</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-gray-600 tracking-wider">Current Streak</span>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_black] flex-1 lg:w-40 flex flex-col justify-center gap-1">
              <span className="text-3xl sm:text-5xl font-extrabold text-black tracking-tighter">42</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-gray-600 tracking-wider">Best Streak</span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col sm:flex-row items-stretch lg:items-end gap-4 sm:gap-6 w-full">
            <div className="bg-purple-700 p-4 sm:p-5 rounded-2xl border-2 border-purple-900 shadow-[4px_4px_0_0_purple-900] text-white flex-1 lg:w-40 flex flex-col justify-center gap-1">
              <span className="text-3xl sm:text-5xl font-extrabold tracking-tighter">138</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-white/80 tracking-wider">Total Days</span>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_black] flex-1 lg:w-64 flex flex-col justify-center lg:justify-end gap-1">
              <span className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-tight">Wed, Apr 8</span>
              <span className="text-sm sm:text-lg font-bold text-black opacity-80">2026</span>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Work;