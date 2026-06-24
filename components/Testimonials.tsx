const testimonials = [
  {
    quote:
      "Had an excellent experience working with attorney Bradley Coxe to clarify laws and governance practices pertaining to Property Owners Associations in North Carolina. Scheduling a consultation was easy, and Mr. Coxe took the time to read the materials and provide clear guidance.",
    author: "L.B.",
  },
  {
    quote:
      "After having the opportunity to witness Mr. Coxe's skills in the courtroom, I decided to employ him in a HOA dispute I was having. He offered excellent and informed guidance in the matter. His promptness was appreciated and his skill apparent.",
    author: "R.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16" aria-labelledby="testimonials-heading">
      <div className="container-xl">
        <h2 id="testimonials-heading" className="section-heading text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-gold"
            >
              <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-navy font-semibold">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
