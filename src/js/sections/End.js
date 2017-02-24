import React from 'react';

import InfographicSection from '../components/InfographicSection';
import EndButton from '../components/EndButton';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';


export default function End(props) {
  return (
    <InfographicSection className="infographic__section infographic__section--end"
      colorIndex="light-2">
      <Box direction="row" justify="center" align="center">
        <Box pad="large" alignSelf="start">
        <Anchor href="https://www.yammer.com/hpe.com/#/threads/inGroup?type=in_group&feedId=9981391&view=all" target="_blank">
          <Image src="img/yammer-icon.png" full='true' size="small"/>
        </Anchor>
        </Box>
        <Box>
          <Headline size="large">
          Software needs constant improvement so we created a yammer group where you can leave your feedback.
          Click on through via the icon.
          </Headline>
        </Box>
      </Box>
      <EndButton onClick={props.onEndClick}/>
    </InfographicSection>
  );
};
