import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[82vh] flex items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur text-xs font-medium text-gray-700 ring-1 ring-black/5">
                Powered by advanced AI automations
              </span>
              <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
                Automate revenue with AI agents
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                We build end-to-end automations that book meetings, close deals, and run your ops
                while you sleep. Used by multi-figure brands to scale without headcount.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black">Book a live demo</a>
                <a href="#pricing" className="px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-black/10 hover:ring-black/20">View pricing</a>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
                <div>
                  <div className="text-2xl font-semibold text-gray-900">$10M+</div>
                  <div>Pipeline influenced</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">30–70%</div>
                  <div>Cost reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">24/7</div>
                  <div>Always on agents</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">2–6x</div>
                  <div>Faster cycles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
      </div>
    </section>
  )
}
