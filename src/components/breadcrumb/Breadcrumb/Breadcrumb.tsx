import React from 'react'
import classnames from 'classnames'
export interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
  current?: boolean
}

export const Breadcrumb = (
  props: BreadcrumbProps & JSX.IntrinsicElements['li']
): React.ReactElement => {
  const { children, current = false, className, ...listItemProps } = props
  const classes = classnames(
    'usa-breadcrumb__list-item',
    {
      'usa-current': current,
    },
    className
  )

  return (
    <li
      className={classes}
      aria-current={current ? 'page' : undefined}
      {...listItemProps}>
      {children}
    </li>
  )
}
