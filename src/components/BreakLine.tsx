export interface BreakLineProps {
  text: string
}

export const BreakLine: React.FC<BreakLineProps> = ({ text }) => {
  return (
    <div className="mx-0 mb-4 flex items-center justify-center">
      <div className="bg-primary h-0.5 grow"></div>
      <div className="text-text grow-0 px-2 py-0">{text}</div>
      <div className="bg-primary h-0.5 grow"></div>
    </div>
  )
}
