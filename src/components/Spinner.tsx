interface Props {
  size?: 'xs' | 'sm' | 'md'
}

export const Spinner: React.FC<Props> = ({ size = 'sm' }) => {
  return (
    <div
      className={`
      rounded-full animate-spin border-gray-300 border-t-gray-500
      ${size === 'xs' && 'h-4 w-4 border-[2px]'}
      ${size === 'sm' && 'h-5 w-5 border-2'}
      ${size === 'md' && 'h-5 w-5 border-[3px]'}
      `}
    />
  )
}
