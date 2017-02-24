import React from 'react';

import InfographicSection from '../components/InfographicSection';
import StartButton from '../components/StartButton';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Image from 'grommet/components/Image';

export default function Intro () {
  return (
    <InfographicSection className="infographic__section infographic__section--start"
      colorIndex="light-1">
      <div className="infographic__section-header">
        <Headline size="large" strong={true}>The OneSupport App</Headline>
      </div>
      <Headline size="small">Finding the right support resources on the go when you need them.
      Scan the QR code for android (iOs incoming)</Headline>
      <Box direction="row" full="horizontal" justify="center" align="center"
        pad={{vertical: "medium"}} responsive={false}>
        <Image src="img/android.png" size="medium" colorIndex="neutral-2" />
      </Box>
      <Footer justify="center" align="center">
        <StartButton text="scroll down to continue"/>
      </Footer>
    </InfographicSection>
  );
}
