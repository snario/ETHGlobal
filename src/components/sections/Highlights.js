import React, { Component } from 'react';
import styled from 'styled-components';

import VideoModal from 'common/VideoModal';
import { Section, Container } from 'components/global';
import HorizontalScroller from 'common/HorizontalScroller';

const FEATURED = [
  {
    title: `“If we want crypto to get more adoption, it has to be by providing real value to people” - Vitalik`,
    duration: '45:14',
    location: 'ETHSingapore',
    url: 'https://www.youtube.com/watch?v=egC2F_JKuhc',
  },
  {
    title: `"People don't realize how close the tech is to being ready" - Vitalik & Balaji Srinivasan at ETHSF`,
    duration: '55:30',
    location: 'ETHSanFrancisco',
    url: 'https://www.youtube.com/watch?v=E35poTWzWZA',
  },
];

const RECENT = [
  {
    title: `Open Finance on Ethereum with Dharma, 0x, Maker, Compound, and Coinbase - ETHSanFrancisco`,
    duration: '52:23',
    location: 'ETHSanFrancisco',
    url: 'https://www.youtube.com/watch?v=6KYtsI_ZfUI',
  },
  {
    title: `Vitalik Buterin at ETHWaterloo: Blockchains and Privacy through Strong Cryptography`,
    duration: '36:49',
    location: 'ETHWaterloo',
    url: 'https://www.youtube.com/watch?v=9cDFpACnK1U',
  },
  {
    title: `Jeff Coleman at ETHWaterloo: Blockchains and Mechanism Design`,
    duration: '27:41',
    location: 'ETHWaterloo',
    url: 'https://www.youtube.com/watch?v=9j0zTQ8u4II',
  },
  {
    title: `How Decentralized Technology Will Impact Our Society at ETHWaterloo`,
    duration: '2:47:41',
    location: 'ETHWaterloo',
    url: 'https://www.youtube.com/watch?v=7qBRESY_Ejc',
  },
  {
    title: `ETHWaterloo 2017`,
    duration: '5:57',
    location: 'ETHWaterloo',
    url: 'https://www.youtube.com/watch?v=H_WBFIoWFYg',
  },
];

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      previewVideoUrl: '',
    };
  }

  handleVideoThumbClick = url =>
    this.setState({ modalOpen: true, previewVideoUrl: url });

  handleModalClose = () => this.setState({ modalOpen: false });

  getVideoThumb = url => {
    if (url === 'https://www.youtube.com/watch?v=6KYtsI_ZfUI') {
      return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
    } else {
      return `https://img.youtube.com/vi/${
        url.split('v=')[1]
      }/maxresdefault.jpg`;
    }
  };

  render() {
    const { modalOpen, previewVideoUrl } = this.state;
    return (
      <Section id="highlights" {...this.props} background="#1F294F">
        <VideoModal
          url={previewVideoUrl}
          modalOpen={modalOpen}
          handleClose={this.handleModalClose}
        />
        <Container>
          <Heading>
            <h2>Get the highlights</h2>
            <p>Check out panels, workshops and more from our past events.</p>
          </Heading>
          <H4>Featured</H4>
          <Featured>
            {FEATURED.map(({ title, duration, location, url }) => (
              <Video
                onClick={() => this.handleVideoThumbClick(url)}
                key={title}
              >
                <img src={this.getVideoThumb(url)} alt={title} />
                <Overlay>
                  <PlayIcon />
                  <VideoDetails
                    title={title}
                    duration={duration}
                    location={location}
                  />
                </Overlay>
              </Video>
            ))}
          </Featured>
          <H4>RECENT</H4>
          <HorizontalScroller video>
            {RECENT.map(({ title, duration, location, url }) => (
              <div key={title}>
                <Video small onClick={() => this.handleVideoThumbClick(url)}>
                  <img src={this.getVideoThumb(url)} alt={title} />
                  <PlayIcon />
                </Video>
                <VideoDetails
                  title={title}
                  duration={duration}
                  location={location}
                  small
                />
              </div>
            ))}
          </HorizontalScroller>
        </Container>
      </Section>
    );
  }
}

const VideoDetails = ({ small, title, duration, location }) => (
  <Details small={small}>
    <h3>{title}</h3>
    <p>
      {duration} &#9679; {location}
    </p>
  </Details>
);

const Heading = styled.div`
  text-align: center;

  h2 {
    color: white;
  }

  p {
    display: block;
    color: ${props => props.theme.color.white.light};
    margin-top: 16px;
    margin-bottom: 64px;
  }
`;

const H4 = styled.h4`
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 48px;

  &::before {
    content: '';
    height: 30px;
    width: 8px;
    background: ${props => props.theme.color.blue.regular};
    margin-right: 12px;
  }
`;

const Featured = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Details = styled.div`
  h3 {
    color: ${props => props.theme.color.white.regular};
  }

  p {
    color: ${props => props.theme.color.white.light};
  }

  ${props =>
    props.small &&
    `
    h3 {
      ${props.theme.font_size.regular};
      margin-top: 16px;
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 268px;
    }
    p {
      ${props.theme.font_size.small};
    }
  `};

  ${props =>
    !props.small &&
    `
    margin-right: 32px;
  `}
`;

const PlayIcon = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  position: relative;
  background-color: #fff;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 23px;
    left: 27px;
    width: 0;
    height: 0;
    border-left: 12px solid #040202;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 32px;
  bottom: 32px;
  z-index: 2;

  > ${PlayIcon} {
    margin-bottom: 16px;
  }
`;

const Video = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid rgba(132, 142, 174, 0.5);
  max-height: ${props => (props.small ? 192 : 384)}px;
  background-color: black;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(38, 37, 90, 0) 0%,
      rgba(38, 37, 90, 0.8) 100%
    );
    z-index: 1;
  }

  img {
    max-height: ${props => (props.small ? 192 : 384)}px;
  }

  > img,
  > ${Overlay} {
    transition: transform 0.3s cubic-bezier(0.09, 0.33, 0.46, 1);
  }

  &:hover {
    cursor: pointer;

    > img {
      transform: scale(1.05);
    }

    > ${Overlay} {
      transform: scale(0.95);
    }
  }

  ${props =>
    props.small &&
    `
    > ${PlayIcon} {
      position: absolute;
      top: 64px;
      left: 92px;
      opacity: 0;
      transition: opacity 0.1s ease-in;
    }

    &:hover {
      > ${PlayIcon} {
        opacity: 1;
      }
    }
  `};
`;

export default Highlights;
