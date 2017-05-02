import React from 'react';

import classnames from 'classnames';

import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import InfographicSection from '../components/InfographicSection';

import PlatformAndroid from 'grommet/components/icons/base/PlatformAndroid';
import Java from 'grommet/components/icons/base/Java';
import Like from 'grommet/components/icons/base/Like';
import Anchor from 'grommet/components/Anchor';




const CLASS_ROOT = "title-section";

export default function Title1 () {
  const classes = classnames([
    CLASS_ROOT,
    `${CLASS_ROOT}--left-align`,
    `${CLASS_ROOT}--column-reverse`
  ]);

  return (
    <InfographicSection className={classes} direction="row" colorIndex="accent-1">
      <Box className={`${CLASS_ROOT}__col-2`} direction="column" alignContent="start">
        <Headline className={`${CLASS_ROOT}__title`} size="large" strong={true}>
        Install on Android
        </Headline>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Enable install from unknown sources
        </Headline>
        <Box direction="row" responsive={false} align="center" wrap={true}>
          <Value
            value={"Settings"}
            colorIndex="grey-1"
            size="small"
            trendIcon={<LinkNext colorIndex="grey-1" style={{marginLeft:'10px',marginRight:'10px'}}/>}
          />
          <Value
            value={"Security"}
            colorIndex="grey-1"
            size="small"
            trendIcon={<LinkNext colorIndex="grey-1" style={{marginLeft:'10px',marginRight:'10px'}}/>}
          />
          <Value
            value={"Toggle Unknown Sources"}
            colorIndex="grey-1"
            size="small"
          />
        </Box>
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Scan the QR code or click on the Android logo to locate the apk
        </Headline>
        {/*<Image src="img/android.png" full='true' size="small"/> */}
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Let the apk download and maybe grab a cup of coffee
        </Headline>
        <Java size="xlarge" colorIndex="grey-1" />
        <Headline className={`${CLASS_ROOT}__desc`} size="small">
        Click the apk from the notification pane and click install. After This you are done. Enjoy!
        </Headline>
        <Like size="xlarge" colorIndex="grey-1" />
      </Box>
      <Box pad={{vertical: "medium", between: "medium"}} direction="column"
         className={`${CLASS_ROOT}__col-1`}justify="center">
         <Anchor href="https://mobilitycat-stg.itcs.hpe.com/catalog/uploads/com.hpeit.mobile.onesupport/Android/1.0.0/com.hpeit.mobile.onesupport.apk" target="_blank">
        <PlatformAndroid size="huge" colorIndex="grey-1" />
        </Anchor>
      </Box>




    </InfographicSection>
  );
};
