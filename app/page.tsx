import Button from './components/Button'

export default function Home() {
  const courses = [
    { id: 1, title: 'Web Development Bootcamp', price: 999 },
    { id: 2, title: 'Data Science Fundamentals', price: 1299 },
    { id: 3, title: 'Machine Learning Mastery', price: 1499 },
    { id: 4, title: 'Digital Marketing Essentials', price: 799 },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">Welcome to LEARNOVA</h1>
        <p className="text-xl">Empowering learning through innovation</p>
        <Button href="/payment">Start Your Learning Journey</Button>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Courses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold">${course.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose LEARNOVA?</h2>
        <ul className="space-y-2">
          <li>Cutting-edge Curriculum</li>
          <li>Expert Instructors</li>
          <li>Global Learning Community</li>
        </ul>
      </section>
    </div>
  )
}

