import type { PrimaryKeyProps, TimestampProps } from './common'

export type Category = {
  name: string
} & PrimaryKeyProps &
  TimestampProps
