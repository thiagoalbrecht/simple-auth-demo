/*
Be careful:

In Next.js, this is a React Server Component by default.

This means that this code runs entirely on the server, which renders the component
and sends the "final" HTML to the client. So the user can't inspect the code and see
the secret value if they aren't authenticated.

Sometimes you might need to have client-side interactivity, which means you need to
a Client Component (e.g. check the logout-button.tsx component).

In a Client Component, all the JavaScript, including the conditional logic in this 
component, would be sent to the browser. This means that even if a user isn't 
authenticated, they could potentially inspect the code and see the secret value.

https://nextjs.org/docs/app/building-your-application/rendering
*/
import { isLoggedIn } from "@/app/actions/authenticate";

export default async function SemiProtectedPage() {
  const isAuthenticated = await isLoggedIn();
  return (
    <div className="text-center">
      <h1 className="text-2xl">Semi-Protected Page</h1>
      <p>This page is visible to everyone, but the following secret is not:</p>
      <p className="text-red-600">
        The secret is {isAuthenticated ? "42" : "hidden"}
      </p>
    </div>
  );
}
