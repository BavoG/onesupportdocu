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
      <Headline size="small">Finding the right support resources on the go when you need them.
      Scan or click the QR code on the <strong>left for Android</strong> or the one on the <strong>right for iOS</strong></Headline>
      <Box direction="row" full="horizontal" justify="center" align="center"
        pad={{vertical: "medium"}} responsive={false}>
        <Box pad="medium">
        <Anchor href="https://mobilitycat-stg.itcs.hpe.com/catalog/uploads/com.hpeit.mobile.onesupport/Android/1.0.1/com.hpeit.mobile.onesupport.apk" target="_blank">
        <Image src="img/android.png" size="medium" colorIndex="neutral-2"/>
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
