import { Skeleton } from '@/app/components/ui/skeleton'

export function HeaderFallback() {
  return (
    <div className="flex w-full rounded-lg bg-skeleton h-[200px] 2xl:h-[300px] p-6 gap-4">
      <Skeleton className="bg-background/50 w-[152px] 2xl:w-[252px] h-[152px] 2xl:h-[252px] min-w-[152px] 2xl:min-w-[252px] min-h-[152px] 2xl:min-h-[252px] rounded-lg" />
      <div className="flex flex-col gap-3 w-full h-full justify-end">
        <Skeleton className="w-96 h-10 bg-background/50" />
        <Skeleton className="w-60 h-6 bg-background/50" />

        <div className="flex gap-2">
          <Skeleton className="w-16 h-6 bg-background/50 rounded-full" />
          <Skeleton className="w-16 h-6 bg-background/50 rounded-full" />
          <Skeleton className="w-16 h-6 bg-background/50 rounded-full" />
        </div>
      </div>
      <div className="flex gap-2 h-full items-end">
        <Skeleton className="w-8 h-8 bg-background/50 rounded-full" />
        <Skeleton className="w-8 h-8 bg-background/50 rounded-full" />
      </div>
    </div>
  )
}

export function HomeFallback() {
  return (
    <div className="w-full px-8 py-6">
      <HeaderFallback />

      <PreviewListFallback />
      <PreviewListFallback />
      <PreviewListFallback />
      <PreviewListFallback />
    </div>
  )
}

export function PreviewListFallback() {
  return (
    <div className="w-full flex flex-col my-4">
      <div className="flex justify-between my-4">
        <Skeleton className="w-52 h-8 rounded" />
        <div className="flex gap-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>

      <SongsCarouselFallback />
    </div>
  )
}

export function SongsCarouselFallback() {
  return (
    <>
      <div className="hidden 2xl:flex gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="basis-1/8" key={'large-' + index}>
            <Skeleton className="aspect-square" />
            <Skeleton className="h-4 w-28 mt-2" />
            <Skeleton className="h-3 w-20 mt-1" />
          </div>
        ))}
      </div>

      <div className="flex 2xl:hidden gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="basis-1/5" key={'small-' + index}>
            <Skeleton className="aspect-square" />
            <Skeleton className="h-4 w-28 mt-2" />
            <Skeleton className="h-3 w-20 mt-1" />
          </div>
        ))}
      </div>
    </>
  )
}
