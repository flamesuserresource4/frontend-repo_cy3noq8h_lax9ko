export default function FAQ(){
  const faqs = [
    {
      q: 'How fast can we go live?',
      a: 'Most clients launch a first agent in 2–3 weeks. Complex multi-agent systems may take 4–8 weeks.'
    },
    {
      q: 'What stacks do you support?',
      a: 'We integrate with common CRMs (Salesforce, HubSpot), calendars, email, Slack, payment, and data warehouses. Custom connectors on request.'
    },
    {
      q: 'How do you measure ROI?',
      a: 'We agree on KPIs upfront — booked calls, response time, resolution rates, revenue — and instrument dashboards from day one.'
    },
    {
      q: 'Security & compliance?',
      a: 'We follow least-privilege access, encrypt secrets, and can complete SOC2 questionnaires for enterprise.'
    }
  ]
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">FAQ</h2>
        <div className="mt-8 divide-y divide-gray-200/60">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none flex items-center justify-between text-gray-900 font-medium">
                {f.q}
                <span className="ml-4 h-5 w-5 rounded-full bg-gray-100 grid place-content-center text-xs">+</span>
              </summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
