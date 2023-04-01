import { StyleProps } from '@/common';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export type LogoPageProps = StyleProps & {
  width?: number;
  height?: number;
};

const DEFAULT_PROPS = {} as const;

export default function LogoComp(props: LogoPageProps): ReactElement {
  const p = { ...DEFAULT_PROPS, ...props };

  return (
    <div>
      <Image
        src={'/images/logo.png'}
        alt={''}
        width={p.width ?? 150}
        height={p.width ?? 150}
      />
    </div>
  );
}
