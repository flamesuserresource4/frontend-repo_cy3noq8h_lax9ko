export default function Features(){
  const items = [
    {
      title: 'AI SDR & Lead Gen',
      desc: 'Outbound agents that research, personalize, and book meetings on auto-pilot.',
    },
    {
      title: 'AI Closers',
      desc: 'Voice + chat agents that qualify, handle objections, and close deals 24/7.',
    },
    {
      title: 'Ops & Back-office',
      desc: 'Automate support, invoicing, onboarding, and data entry across your stack.',
    },
    {
      title: 'Custom Integrations',
      desc: 'We wire your CRM, calendars, email, Slack, and data sources together.',
    },
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What we build</h2>
          <p className="mt-3 text-gray-600">Done-for-you automations tailored to outcomes, not hours.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl ring-1 ring-black/5 bg-gradient-to-b from-white to-gray-50/50">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-500 to-orange-400 mb-4" />
              <h3 className="font-medium text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
