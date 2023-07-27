import Image from 'next/image'

interface AvatarProps {
  alt: string
  height?: number
  src: string
  width?: number
  className?: string
}

export function Avatar({
  alt,
  height = 24,
  src,
  width = 24,
  className,
}: AvatarProps) {
  return (
    <Image
      alt={alt}
      height={height}
      src={src}
      width={width}
      className={`rounded-full ${className}`}
    />
  )
}
