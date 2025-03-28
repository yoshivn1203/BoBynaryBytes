import { Code } from 'lucide-react'
import Image from 'next/image'

export function Hero({ showWelcome = true }: { showWelcome: boolean }) {
  return (
    <div className='relative h-[400px]'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        {/* Light mode banner */}
        <Image
          src='/images/uploads/banner-light.jpg'
          alt='Hero background'
          fill
          className='object-cover dark:hidden'
          priority
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMC4zIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjODA4MDgwIiBzdG9wLW9wYWNpdHk9IjAuMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4='
        />
        {/* Dark mode banner */}
        <Image
          src='/images/uploads/banner.jpg'
          alt='Hero background'
          fill
          className='hidden object-cover dark:block'
          priority
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMC4zIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjODA4MDgwIiBzdG9wLW9wYWNpdHk9IjAuMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4='
        />
        {/* Dark overlay with gradient */}
        <div className='absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white dark:from-black/40 dark:via-black/80 dark:to-[#202020]' />
      </div>

      {/* Welcome Content */}
      {showWelcome && (
        <div className='relative z-10 pt-40 md:pt-32 px-4 sm:px-6 lg:px-8 text-center'>
          <div className='flex items-center gap-4 mb-4 justify-center'>
            <div className='flex text-indigo-500 dark:text-indigo-400 '>
              <Code className='w-8 h-8 -ml-2' />
            </div>
            <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text'>
              Welcome!
            </h1>
          </div>
          <p className='text-sm md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
            Hey there, welcome to my developer blog—straight from my brain to you, where I dump all
            my thoughts, experiences, and lessons I learned as I explore the world of software
            development
          </p>
        </div>
      )}
    </div>
  )
}
