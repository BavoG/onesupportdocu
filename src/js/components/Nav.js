import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Headline from 'grommet/components/Headline';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';
import GrommetLogo from
  'grommet/components/icons/base/BrandHpeElementPath';


import Progress from './Progress';

const CLASS_ROOT = 'section-nav';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerActive: false
    };

    this._onClick = this._onClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);
  }

  _onClick() {
    if (this.props.progress >= 95) {
      this.setState({layerActive: true});
    }
  }

  _onLayerClose() {
    this.setState({layerActive: false});
  }

  render() {
    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]:
          this.props.progress >= 95 || this.props.progress <= 0
      }
    );

    const navCta = (this.props.progress >= 95)
      ? <Anchor label={'Share'} icon={<Share />} reverse={true}
          onClick={this._onClick} primary={true} />
      : undefined;

    const layer = (this.state.layerActive) ? (
      <div className="share-layer">
        <Layer onClose={this._onLayerClose} closer={true} flush={true}
          align={"center"}>
          <div className="share">
            <Headline size={"large"} strong={true}>
              Thanks for sharing, we're glad you enjoyed it.
            </Headline>
            <div className="share__icons">
              <SocialShare type="email"
              link="https://pages.github.hpe.com/bavo/onesupportdocu/"
              title="OneSupport - A GSD App"
              text="Check out the GSD app" />
              <SocialShare type="twitter"
              link="https://pages.github.hpe.com/bavo/onesupportdocu/"
              text="@HPE GSD is stepping up." />
              <SocialShare type="facebook"
              link="https://pages.github.hpe.com/bavo/onesupportdocu/" />
              <SocialShare type="linkedin"
              link="https://pages.github.hpe.com/bavo/onesupportdocu/"
              title="OneSupport - A GSD App"
              text="HPE's GSD is stepping up and created a new app to find the right people at the right time." />
            </div>
          </div>
        </Layer>
      </div>
    ) : undefined;

    return (
      <Header className={classes} direction="column" pad={{between:"none"}}
        align="start">
        {layer}
        <Box full="horizontal" direction="row" align="center" justify="between"
          responsive={false} colorIndex="light-1" pad="medium">
          <GrommetLogo size="large" colorIndex="brand" />
          {navCta}
        </Box>
        <Progress progress={this.props.progress}/>
      </Header>
    );
  }
};

Nav.propTypes = {
  progress: PropTypes.number
};
