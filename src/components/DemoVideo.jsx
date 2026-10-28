import { useRef, useState } from 'react'

export default function DemoVideo() {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)

  async function startVideo() {
    setStarted(true)
    try {
      await videoRef.current?.play()
    } catch {
      // Native video controls remain available if the browser blocks playback.
    }
  }

  return (
    <section className="pb-[35px] md:pb-[50px]">
      <div className="mx-auto max-w-[1450px] px-6">
        <p className="mb-3 text-[14px] leading-[1.3] md:mb-4 md:text-[22px]">
          See how it works, start to finish.
        </p>

        <div className="relative overflow-hidden rounded-xl bg-[#101820]">
          <video
            ref={videoRef}
            className="block aspect-video w-full object-cover"
            src="/video/incisive-testimonials.mp4"
            poster="/images/Video_thumbnail_img.png"
            controls={started}
            playsInline
            preload="metadata"
            aria-label="Incisive testimonials"
          />

          {!started && (
            <button
              type="button"
              onClick={startVideo}
              className="absolute inset-0 flex w-full items-center justify-center bg-transparent p-0 text-white focus-visible:outline-4 focus-visible:outline-offset-[-8px] focus-visible:outline-[#f4b544]"
              aria-label="Play Incisive testimonials video"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-[#112e43]/70 pl-1 text-xl transition hover:scale-105 hover:bg-[#3e80a6] md:h-[72px] md:w-[72px] md:text-2xl">
                ▶
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
