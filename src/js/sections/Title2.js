import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import InfographicSection from '../components/InfographicSection';
import PlatformApple from 'grommet/components/icons/base/PlatformApple';
import Value from 'grommet/components/Value';

import LinkNext from 'grommet/components/icons/base/LinkNext';

import Anounce from 'grommet/components/icons/base/announce';
import Deploy from 'grommet/components/icons/base/deploy';


import Anchor from 'grommet/components/Anchor';

const CLASS_ROOT = "title-section";

export default function Title2() {
  let classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-2">
      <Box className={`${CLASS_ROOT}__col-1`} pad={{vertical: "medium"}}>
      <Anchor href="itms-services:///?action=download-manifest&url=https://bavog.github.io/onesupportdocu/ipa/be/com.hpeit.mobile.onesupport.plist" target="_blank">
        <PlatformApple size="huge" colorIndex="grey-1" />
        </Anchor>
      </Box>
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>Install on <Anchor href="itms-services:///?action=download-manifest&url=https://bavog.github.io/onesupportdocu/ipa/be/com.hpeit.mobile.onesupport.plist" target="_blank">iOs</Anchor></Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        We have a <strong>beta</strong> iOS version of the app ready for you!
        </Headline>
        <Anounce size="xlarge" colorIndex="white-1" />
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Scan the QR code up top or click on the Apple logo to start the installation.
        Go ahead and click install when the pop-up opens
        </Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        You can now head over to your homescreen where a fresh new app will appear. You're almost done!
        </Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small" pad={{vertical:"small"}}>
        Finally go to your settings app to add <strong>HPE</strong> as a trusted developer
        </Headline>
        <Box direction="row" responsive={false} align="center" wrap={true} pad={{vertical:"medium"}}>
          <Value
            value={"Settings"}
            colorIndex="white"
            size="small"
            trendIcon={<LinkNext colorIndex="white" style={{marginLeft:'10px',marginRight:'10px'}}/>}
          />
          <Value
            value={"General"}
            colorIndex="white"
            size="small"
            trendIcon={<LinkNext colorIndex="white" style={{marginLeft:'10px',marginRight:'10px'}}/>}
          />
          <Value
            value={"Device Management"}
            colorIndex="white"
            size="small"
            trendIcon={<LinkNext colorIndex="white" style={{marginLeft:'10px',marginRight:'10px'}}/>}
          />
          <Value
            value={"HPE Company"}
            colorIndex="white"
            size="small"
            trendIcon={<LinkNext colorIndex="white" style={{marginLeft:'10px',marginRight:'10px'}}/>}
          />
          <Value
            value={"Trust"}
            colorIndex="white"
            size="small"
          />
        </Box>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        All set for take-off!
        </Headline>
        <Deploy size="xlarge" colorIndex="white-1" />
        </Box>
    </InfographicSection>
  );
};
