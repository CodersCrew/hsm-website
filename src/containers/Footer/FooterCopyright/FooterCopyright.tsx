import React from 'react';

import { COPYRIGHT, DESIGNED_BY, RESERVED_RIGHTS } from './FooterCopyrigh.constants';

export const FooterCopyright = () => (
  <>
    <div className="md-max:hidden">
      <p className="leading-[28px]">{`${COPYRIGHT} ${RESERVED_RIGHTS} ${DESIGNED_BY}`}</p>
    </div>

    <div className="md:hidden">
      <p className="leading-[28px]">{COPYRIGHT}</p>
      <p className="leading-[28px]">{`${RESERVED_RIGHTS} ${DESIGNED_BY}`}</p>
    </div>
  </>
);
