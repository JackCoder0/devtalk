import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import * as React from 'react'
import { ReactTyped } from 'react-typed'

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'bg-backround',
    color: 'text-text',
    // maxWidth: 220,
    // maxHeight: 220,
    fontSize: '1rem',
    fontFamily: 'Roboto',
    border: '2px solid #2f3237',
    borderRadius: '10px',
  },
}))

interface DialogBoxProps {
  component?: React.ReactNode
  tooltipText: string[]
  speed?: number
}

export function DialogBox({ component, tooltipText, speed }: DialogBoxProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <HtmlTooltip
        arrow
        open={open}
        placement="top"
        title={
          <ReactTyped
            strings={tooltipText}
            typeSpeed={speed || 20}
            backSpeed={0}
            loop={false}
            showCursor={false}
          />
        }
      >
        <div>{component}</div>
      </HtmlTooltip>
    </div>
  )
}

export function TooltipV2({ tooltipText, speed }: DialogBoxProps) {
  // const [open, setOpen] = React.useState(false)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true)
  //   }, 100)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    // <div className="text-text bg-background relative w-full rounded-2xl border-2 border-[#1b1c1f] px-4 py-3">
    //   <ReactTyped
    <div className="text-text bg-background relative inline-block rounded-2xl border-2 border-[#1b1c1f] px-4 py-3 whitespace-nowrap">
      <ReactTyped
        strings={tooltipText}
        typeSpeed={speed || 20}
        backSpeed={0}
        loop={false}
        showCursor={false}
      />
      {/* <HtmlTooltip
        arrow
        open={open}
        placement="top"
        title={
          
        }
      > */}
      {/* </HtmlTooltip> */}
    </div>
    // <div>{component}</div>
  )
}
