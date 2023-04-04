import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { Modal } from '../../Modal';
import { storyDocsParameters } from '../../utils';

import { ShellViewer } from './index';

export default {
  title: 'Design System/Viewers/Shell',
  component: ShellViewer,
};

export const Default = () => (
  <ShellViewer data="exception error id undefined" />
);

Default.storyName = 'Default';
Default.parameters = storyDocsParameters;

export const ShellModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal open={open} onClose={handleClose} title="See logs">
        <ShellViewer data="exception error id undefined" />
      </Modal>
    </>
  );
};

ShellModal.storyName = 'Modal';
ShellModal.parameters = storyDocsParameters;

export const ShellWithChildren = () => (
  <ShellViewer>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="money">
        Send 14690 EUR/2 from account world to account
        payment:e90f61a4_37b0_4878_9903_bbaabb1e16cd (ledger
        orchestration-000-internal)
      </Typography>
      <Typography ml={1} variant="money" color="secondary">
        Created transaction: 0
      </Typography>
      <Typography ml={1} variant="money" color="secondary">
        Reference: payment:e90f61a4_37b0_4878_9903_bbaabb1e16cd
      </Typography>
    </Box>
  </ShellViewer>
);

ShellWithChildren.storyName = 'Children';
ShellWithChildren.parameters = storyDocsParameters;

export const ShellWithoutButton = () => (
  <ShellViewer data="exception error id undefined" copy={false} />
);

ShellWithoutButton.storyName = 'Without copy';
ShellWithoutButton.parameters = storyDocsParameters;

export const ShellScroll = () => (
  <ShellViewer
    data="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    copy={false}
    scroll
  />
);

ShellScroll.storyName = 'Scroll';
ShellScroll.parameters = storyDocsParameters;
