const testimonials = [
  {
    quote: 'A quiet sanctuary with the most thoughtful espresso service in town.',
    name: 'Mira L.',
    title: 'Designer',
  },
  {
    quote: 'The tasting flight feels like a tiny coffee ceremony. I come weekly.',
    name: 'Jonas P.',
    title: 'Creative director',
  },
  {
    quote: 'Warm, slow, intentional. The playlist alone is worth a visit.',
    name: 'Nina S.',
    title: 'Writer',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-subheading text-sm uppercase tracking-[0.3em] text-(--coffee-brown)">
              Guest stories
            </p>
            <h2 className="mt-3 font-display text-3xl">What people are saying</h2>
          </div>
          <span className="text-sm text-muted-foreground">
            4.9 average rating
          </span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-border bg-(--cream-white) p-6 drop-shadow-lg"
            >
              <p className="font-serif-light text-lg">"{item.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
