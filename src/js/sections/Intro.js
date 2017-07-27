import React from 'react';

import InfographicSection from '../components/InfographicSection';
import StartButton from '../components/StartButton';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';

export default function Intro () {
  return (
    <InfographicSection className="infographic__section infographic__section--start"
      colorIndex="light-1">
      <div className="infographic__section-header">
        <Headline size="large" strong={true}>The OneSupport App</Headline>
      </div>
      <Headline size="small">The OneSupport app was created to find the right support resources when you need them. The Android version can be found in the play store for the ios version scan or click the QR code on the <strong>right</strong></Headline>
      <Box direction="row" full="horizontal" justify="center" align="center"
        pad={{vertical: "medium"}} responsive={false}>
        <Box pad="medium">
        <Anchor href="https://play.google.com/store/apps/details?id=com.hpeit.mobile.support&hl=en" target="_blank">
        <Image src="img/playstore.png" size="medium" colorIndex="neutral-2"/>
        </Anchor>
        </Box>
        <Box pad="medium">
        <Anchor href="itms-services:///?action=download-manifest&url=https://bavog.github.io/onesupportdocu/ipa/be/com.hpeit.mobile.onesupport.plist" target="_blank">
        <Image src="img/ios.jpg" size="medium" colorIndex="neutral-2"/>
        </Anchor>
        </Box>
      </Box>
      <Footer justify="center" align="center">
        <StartButton text="scroll down to continue"/>
      </Footer>
    </InfographicSection>
  );
}
