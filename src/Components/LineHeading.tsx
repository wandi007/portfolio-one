import { Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const LineHeading = ({ children, ...props }: any) => (
  <Heading
    position="relative"
    _before={{
      content: `''`,
      position: `absolute`,
      bottom: 1,
      left: 0,
      height: `30%`,
      width: `100%`,
      bgColor: useColorModeValue(`brand.200`, `brand.900`),
      zIndex: -1,
    }}
    {...props}
  >
    {children}
  </Heading>
);

export default LineHeading;
