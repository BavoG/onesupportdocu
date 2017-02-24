import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import PlatformApple from 'grommet/components/icons/base/PlatformApple';

const CLASS_ROOT = "title-section";

export default function Title2() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-2">
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical: "medium"}}>
        <PlatformApple size="huge" colorIndex="grey-1" />
      </Box>
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>iOs incoming</Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        We are experiencing some issues with the iOs build pipeline we'll get them fixed ASAP!
        </Headline>
        </Box>
    </InfographicSection>
  );
};
