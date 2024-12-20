'use client'

import { authenticate } from "@/app/actions/authenticate"
import { useState } from "react"

export default function LoginForm() {
  const [error, setError] = useState<string>('')
  
  async function handleSubmit(formData: FormData) {
    const result = await authenticate(formData)
    if (!result.success) {
      setError('Invalid password')
    } else {
      // Redirect to protected page on success
      window.location.href = '/protected'
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
          className="w-full rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}