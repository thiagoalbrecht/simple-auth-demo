'use client'

import { authenticate } from "@/app/actions/authenticate"
import { useState } from "react"
import { useSearchParams } from 'next/navigation'

export default function LoginForm() {
  const [error, setError] = useState<string>('')
  const searchParams = useSearchParams()
  
  async function handleSubmit(formData: FormData) {
    const password = formData.get('password') as string
    const result = await authenticate(password)

    if (!result.success) {
      setError('Invalid password')
    } else {
      // Get the redirect URL from query params or default to '/'
      const redirectUrl = searchParams.get('redirect') || '/'
      window.location.href = redirectUrl
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-2"
        >
          Login
        </button>
      </form>
    </div>
  )
}