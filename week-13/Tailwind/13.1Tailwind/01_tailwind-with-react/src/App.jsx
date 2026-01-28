export default function App() {
  return (
    <>
      <UseCase />
      {/* <Responsive />
      <FlexDemo />
      <GridDemo />
      <GridExample /> */}
    </>
  );
}

function UseCase() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="bg-blue-300 sm:col-span-4

 "
        >
          1
        </div>
        <div
          className="bg-yellow-300  sm:col-span-4

 "
        >
          2
        </div>
        <div
          className="bg-green-300 sm:col-span-4

"
        >
          3
        </div>
      </div>
    </>
  );
}
function Responsive() {
  return (
    <div className="xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300">
      Hello
    </div>
  );
}
function GridDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Tailwind Grid Demo</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-red-400 text-white p-6 text-center font-bold rounded">
          Item 1
        </div>

        <div className="bg-green-400 text-white p-6 text-center font-bold rounded">
          Item 2
        </div>

        <div className="bg-blue-400 text-white p-6 text-center font-bold rounded">
          Item 3
        </div>

        <div className="bg-purple-400 text-white p-6 text-center font-bold rounded">
          Item 4
        </div>

        <div className="bg-pink-400 text-white p-6 text-center font-bold rounded">
          Item 5
        </div>

        <div className="bg-yellow-400 text-black p-6 text-center font-bold rounded">
          Item 6
        </div>
      </div>
    </div>
  );
}

function GridExample() {
  return (
    <div>
      {/* Header section */}
      <h2 className="mt-4 text-[30px] font-bold">
        Grid Example using Tailwind
      </h2>

      {/* Grid container with 12-column layout */}
      <div className="grid grid-cols-12">
        {/* First child occupying 4 columns */}
        <div className="bg-blue-600 col-span-4 p-2">Child 1</div>
        {/* Second child occupying 6 columns */}
        <div className="bg-red-600 col-span-6 p-2">Child 2</div>
        {/* Third child occupying 2 columns */}
        <div className="bg-yellow-600 col-span-2 p-2">Child 3</div>
      </div>
    </div>
  );
}

function FlexDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-200">
      <div className="flex flex-col items-center gap-4 bg-blue-300 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-red-600">Hello Tailwind!</h1>

        <div className="flex gap-4">
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white font-bold">
            1
          </div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white font-bold">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
