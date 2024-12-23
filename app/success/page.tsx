import Button from '../components/Button'
import { CheckCircle } from 'lucide-react'

export default function Success() {
  return (
    <div className="text-center space-y-6 max-w-md mx-auto">
      <div className="text-green-500 dark:text-green-400">
        <CheckCircle size={64} className="mx-auto" />
      </div>
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Payment Successful!</h1>
      <p className="text-xl">Thank you for enrolling in LEARNOVA. Your learning journey begins now!</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <p>You will receive an email with further instructions and course materials shortly.</p>
      </div>
      <Button href="/">Back to Home</Button>
    </div>
  )
}

