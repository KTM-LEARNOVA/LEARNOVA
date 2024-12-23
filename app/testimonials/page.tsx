export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "John Doe", course: "Web Development Bootcamp", text: "LEARNOVA's course helped me land my dream job as a full-stack developer!" },
    { id: 2, name: "Jane Smith", course: "Data Science Fundamentals", text: "The instructors are top-notch, and the course content is cutting-edge." },
    { id: 3, name: "Mike Johnson", course: "Machine Learning Mastery", text: "I've tried other platforms, but LEARNOVA's approach to teaching ML is unparalleled." },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">What Our Students Say</h1>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.text}"</p>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{testimonial.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

