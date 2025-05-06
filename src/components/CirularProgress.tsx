import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress'

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; color?: string },
) {
  return (
    <div className="relative inline-flex">
      <CircularProgress
        variant="determinate"
        size={50}
        {...props}
        sx={{ color: props.color || 'primary.main' }}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <p className="font-jura text-[12px]">{`${Math.round(props.value)}%`}</p>
      </div>
    </div>
  )
}

export const CircularValueLabel = ({ value = 0 }) => {
  return <CircularProgressWithLabel value={value} />
}
