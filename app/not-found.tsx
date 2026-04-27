import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-gray-900">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 text-gray-600">주소가 바뀌었거나 삭제된 페이지일 수 있어요.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
      >
        홈으로
      </Link>
    </main>
  )
}
