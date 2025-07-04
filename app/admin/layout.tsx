import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel - IOES',
  description: 'Admin panel for managing IOES courses and content',
  robots: 'noindex, nofollow', // Prevent search engines from indexing admin pages
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">IOES Admin Panel</h1>
            </div>
            <div className="text-sm text-gray-500">
              Team Access Only
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
