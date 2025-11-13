export default function Testimonials(){
  const quotes = [
    {
      name: 'Lena – COO, Fintech',
      text: 'Within 6 weeks, AI SDRs booked 42 SQLs and cut acquisition cost by 38%.',
    },
    {
      name: 'Marco – CEO, SaaS',
      text: 'Their voice agent closes weekend leads while we sleep. Our fastest payback ever.',
    },
    {
      name: 'Priya – Head of Ops, Ecom',
      text: 'Refunds, returns, and inventory sync run automatically — support CSAT up 22%.',
    },
  ]
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What clients say</h2>
          <p className="mt-3 text-gray-600">Outcomes from teams leveling up with automation.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.name} className="p-6 rounded-xl ring-1 ring-black/5 bg-gradient-to-b from-white to-gray-50/50">
              <p className="text-gray-700">“{q.text}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
