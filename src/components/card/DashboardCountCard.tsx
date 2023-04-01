import { StyleProps } from '@/common';
import { PRIMARY_COLOR } from '@/constants';
import classNames from 'classnames';
import clsx from 'clsx';
import React from 'react';

export type DashboardCountCardProps = StyleProps & {
  /**
   * Icon that will be shown on the card
   */
  icon?: React.ReactElement;

  /**
   * count of the item that will be show on the card
   */
  count: number;

  borderRadius?: number;
  backgroundColor?: string;
};

const DEFAULT_PROPS = {} as const;

export function DashboardCountCard(
  props: DashboardCountCardProps
): React.ReactElement {
  const p = { ...DEFAULT_PROPS, ...props };

  const cardClass = classNames(
    p.className,
    `w-full bg-[${p.backgroundColor ?? PRIMARY_COLOR}] min-h-[150px] rounded-[${
      p.borderRadius ?? 30
    }px]`
  );

  return <div className={cardClass}></div>;
}
