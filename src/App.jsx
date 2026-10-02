function App() {
  return (
    <main className="min-h-screen bg-surface p-8">
      <h1 className="font-display text-5xl font-extrabold uppercase text-ink">
        Made for the{' '}
        <span className="font-accent italic text-brand-text">future</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg font-light text-ink-muted">
        When you choose a school that chooses you, it becomes a place to
        belong, grow, and shine.
      </p>
      <button className="mt-6 rounded-lg bg-brand px-6 py-3 font-display text-lg font-bold uppercase text-on-brand">
        Apply Now
      </button>
    </main>
  )
}

export default App