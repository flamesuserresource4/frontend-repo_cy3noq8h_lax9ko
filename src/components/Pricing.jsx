export default function Pricing(){
  const tiers = [
    {
      name: 'Starter',
      price: '$3,000+',
      blurb: 'For early validation and first wins',
      features: ['1 AI agent', 'Core integrations', 'Playbook setup', 'Email support']
    },
    {
      name: 'Growth',
      price: '$7,500+',
      blurb: 'Scale pipelines and ops with confidence',
      features: ['2-4 AI agents', 'Advanced integrations', 'RevOps automations', 'Priority support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      blurb: 'Tailored to complex teams and workflows',
      features: ['Multi-agent systems', 'SLAs & security reviews', 'Dedicated engineer', 'Onsite workshops']
    }
  ]
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Pricing</h2>
          <p className="mt-3 text-gray-600">Simple retainers aligned to outcomes. Most clients see ROI in weeks, not months.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-xl ring-1 ring-black/5 bg-gradient-to-b from-white to-gray-50/50 flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{t.name}</h3>
                <div className="mt-2 text-3xl font-semibold text-gray-900">{t.price}</div>
                <p className="mt-2 text-sm text-gray-600">{t.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {t.features.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-orange-400" />{f}</li>))}
                </ul>
              </div>
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="mt-6 inline-flex justify-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black">Book a call</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
