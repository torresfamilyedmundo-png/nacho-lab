export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold">Nacho Lab</h1>
        <p className="text-xl text-neutral-400">Private betting intelligence dashboard</p>
        <div className="space-y-3">
          <a href="/login" className="block w-full max-w-sm mx-auto rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black text-center">
            Sign in
          </a>
          <a href="/signup" className="block w-full max-w-sm mx-auto rounded-xl border border-neutral-700 px-8 py-4 font-semibold text-neutral-300 text-center">
            Create account
          </a>
        </div>
      </div>
    </main>
  );
}
