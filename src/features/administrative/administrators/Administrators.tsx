import { StyleProps } from '@/common';
import React, { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type AdministratorsProps = StyleProps & {};

const DEFAULT_PROPS = {} as const;

export default function Administrators(
  props: AdministratorsProps
): ReactElement {
  const p = { ...DEFAULT_PROPS, ...props };
  return (
    <div className={p.className}>
      <div className="w-full min-h-[70px] border-[#EF476F] border-[5px] rounded-b-[10px]">
        Samson
      </div>
    </div>
  );
}
