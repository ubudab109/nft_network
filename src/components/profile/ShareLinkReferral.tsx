import React, { useEffect, useState } from 'react';
import { Box, Icon, useClipboard, Tooltip } from '@chakra-ui/react';
import { FaShareAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface ShareLinkReferralProps {
  linkShare?: string;
}
export const ShareLinkReferral: React.FC<ShareLinkReferralProps> = (props) => {
  const [defaultLink, setDefaultLink] = useState('');
  const { hasCopied, onCopy } = useClipboard(
    `${defaultLink}/register?ref=${props.linkShare ?? ''}`
  );

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setDefaultLink(window.location.host);
    }
  }, [router]);

  return (
    <Tooltip label={hasCopied ? 'Copied' : 'Share Link'} placement="top">
      <Box>
        <Icon
          as={FaShareAlt}
          onClick={onCopy}
          color={hasCopied ? '#955d94' : 'white'}
        ></Icon>
      </Box>
    </Tooltip>
  );
};
