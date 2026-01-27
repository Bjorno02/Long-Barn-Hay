import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-steel-100 px-6">
      <div className="text-center">
        <p className="text-7xl font-bold text-barn-600 mb-4">404</p>
        <h1 className="text-3xl font-semibold text-steel-900 mb-4">Page Not Found</h1>
        <p className="text-steel-600 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-barn-600 text-white font-medium rounded shadow-chrome hover:bg-barn-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
