import Image from 'next/image'

export default function ComingSoonSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">

          {/* Main Image - Full Screen */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-full max-w-6xl">
              <Image 
                src="/images/block.jpg" 
                alt="xoffice & xconnector 제품 소개" 
                width={1920}
                height={1080}
                className="w-full h-auto rounded-3xl shadow-2xl border-2 border-gray-200"
                priority
              />
            </div>
          </div>

          {/* Optional: 간단한 문구 */}
          <div className="mt-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-blue-500 text-2xl">xoffice</span> & <span className="font-semibold text-blue-500 text-2xl">xconnector</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

