import React from 'react';

const Work = () => {
  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const dayLabels = ['Mon', 'Wed', 'Fri', 'Sun'];

  const CheckboxCell = ({ type }) => {
    let baseClass = "w-4 h-4 rounded border transition-colors cursor-default";
    
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
      <div className="flex flex-col gap-1 p-3 bg-white">
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
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center items-center font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-5xl mx-auto flex flex-col gap-8 border border-gray-200">
        
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-extrabold tracking-tighter text-black" style={{ fontFamily: 'var(--font-mono), monospace' }}>
            Work out
          </h1>
          <button className="px-6 py-3 rounded-full border-2 border-black font-bold text-lg shadow-[4px_4px_0_0_black] bg-white text-black hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_black] transition-all">
            Mark Today
          </button>
        </div>

        <div className="relative">
          <div className="flex items-start gap-3">
            <div className="flex flex-col gap-[24px] pt-[20px] pr-2 text-right">
              {dayLabels.map(label => (
                <span key={label} className="text-xs font-medium text-gray-500 leading-none">{label}</span>
              ))}
            </div>

            <div className="flex-grow flex flex-col gap-2">
              <div className="flex">
                {months.map((month, i) => (
                  <span key={i} className={`flex-1 text-center text-sm font-medium text-gray-900 ${i % 2 === 0 ? '-ml-2' : ''}`}>
                    {month}
                  </span>
                ))}
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                <Grid />
              </div>
            </div>
          </div>
          <div className="absolute left-[38.5%] bottom-[-16px] text-gray-400 text-xs font-black">▲</div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-6">
            <div className="bg-white p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_black] w-40 flex flex-col gap-1">
              <span className="text-5xl font-extrabold text-black tracking-tighter">29</span>
              <span className="text-xs font-bold uppercase text-gray-600 tracking-wider">Current Streak</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_black] w-40 flex flex-col gap-1">
              <span className="text-5xl font-extrabold text-black tracking-tighter">42</span>
              <span className="text-xs font-bold uppercase text-gray-600 tracking-wider">Best Streak</span>
            </div>
          </div>

          <div className="flex items-end gap-6">
            <div className="bg-purple-700 p-5 rounded-2xl border-2 border-purple-900 shadow-[4px_4px_0_0_purple-900] text-white w-40 flex flex-col gap-1">
              <span className="text-5xl font-extrabold tracking-tighter">138</span>
              <span className="text-xs font-bold uppercase tracking-wider">Total Days</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_0_black] w-64 flex flex-col gap-1">
              <span className="text-2xl font-extrabold text-black tracking-tight">Wednesday, Apr 8</span>
              <span className="text-lg font-bold text-black opacity-80">2026</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;