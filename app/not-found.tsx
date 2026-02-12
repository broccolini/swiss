import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-lg font-semibold text-foreground">
          Ruh roh! We couldn&apos;t find the requested page :(
        </p>
        <p className="mb-6 text-muted-foreground">Here are some options:</p>
        <ul className="mb-6 space-y-2 text-left text-muted-foreground">
          <li>• Do a happy dance and try again.</li>
          <li>• Check your internet connection – it might just be on a ☕️ break.</li>
          <li>• Try going back to the <Link href="/" className="text-primary hover:underline">Home</Link> page.</li>
        </ul>
        <p className="text-muted-foreground">
          If all else fails, you can always{" "}
          <a href="mailto:nbalamuru@gmail.com" className="text-primary hover:underline">
            contact us
          </a>{" "}
          for help.
        </p>
      </div>
    </div>
  )
}

