import { FC, ReactNode } from 'react'

const MarqueeView: FC<{children: ReactNode }> = ({ children }) => (
  // @ts-expect-error: Marquee is deprecated but we're using it anyway 😈
  <marquee
    // eslint-disable-next-line react/no-unknown-property
    scrollamount="3" behavior="scroll" direction="up"
    style={{
      textAlign: "center",
      height: 250,
    }}
  >
    {children}
    {/* @ts-expect-error: Marquee is deprecated but we're using it anyway 😈 */}
  </marquee>
)

export default MarqueeView
