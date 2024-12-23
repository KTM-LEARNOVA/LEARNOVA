'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '../components/Button'

export default function Payment() {
  const [transactionNumber, setTransactionNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulating payment verification process
    setTimeout(() => {
      setIsLoading(false)
      router.push('/success')
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">Enroll Now</h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <p className="text-xl mb-4 text-center">Course Fee: ₹7,500</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <p className="mb-4">Scan the QR code to pay:</p>
            <Image
              src="/placeholder.svg"
              alt="UPI QR Code for payment"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Open your UPI app and scan this QR code to complete the payment.
            </p>
          </div>
          <div>
            <label htmlFor="transactionNumber" className="block mb-2 font-semibold">
              UPI Transaction Number:
            </label>
            <input
              type="text"
              id="transactionNumber"
              value={transactionNumber}
              onChange={(e) => setTransactionNumber(e.target.value)}
              placeholder="Enter UPI transaction number"
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={isLoading || !transactionNumber}
          >
            {isLoading ? 'Verifying...' : 'Verify Payment'}
          </Button>
        </form>
      </div>
    </div>
  )
}
