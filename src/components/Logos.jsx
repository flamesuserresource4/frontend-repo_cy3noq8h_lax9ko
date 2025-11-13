export default function Logos(){
  const logos = ['Acme', 'Nova', 'Pulse', 'Vertex', 'Origin', 'Zenith']
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm">Trusted by high-growth teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-md bg-gradient-to-tr from-gray-100 to-gray-50 border border-black/5 flex items-center justify-center text-gray-400 text-sm font-medium">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
