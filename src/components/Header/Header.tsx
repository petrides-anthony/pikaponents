/* eslint-disable no-alert */
import React, { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

export enum ColourPalette {
  PastelBlue = '#3792CB',
  PastelCoral = '#AC3B61',
  PastelGreen = '#95C9A9'
}
export interface HeaderProps {
  /**
   * Link to navigate to when clicking the main header icon
   */
  headerIconLink: string;
  /**
   * What background color to use
   */
  backgroundColor?: ColourPalette;
  /**
   * Header contents
   */
  headerText?: string;
  /**
   * Nav Link 1 contents
   */
  navLinkText1?: string;
   /**
   * Nav Link 1 url
   */
  navLink1?: string;
  /**
   * Nav Link 2 contents
   */
  navLinkText2?: string;
   /**
   * Nav Link 2 url
   */
  navLink2?: string;
  /**
   * Nav Link 1 contents
   */
  navLinkText3?: string;
   /**
   * Nav Link 3 url
   */
  navLink3?: string;
}

const divStyle = {
  padding: '20px',
  margin: '20px',
};

const Header: FC<HeaderProps> = ({
  backgroundColor = ColourPalette.PastelCoral,
  headerIconLink,
  headerText,
  navLinkText1,
  navLink1,
  navLinkText2,
  navLink2,
  navLinkText3,
  navLink3,
}: HeaderProps) => (
  <div style={divStyle}>
    <AppBar style={backgroundColor ? { backgroundColor } : {}}>
      <ToolBar>
        <IconButton href={headerIconLink}>
          <BeachAccessIcon />
        </IconButton>
        <Typography variant="h6">
          {headerText}
        </Typography>
        {navLinkText1 && (
        <Button
          size="small"
          href={navLink1}
        >
          {navLinkText1}
        </Button>
        )}
        {navLinkText2 && (
        <Button
          size="small"
          href={navLink2}
        >
          {navLinkText2}
        </Button>
        )}
        {navLinkText3 && (
        <Button
          size="small"
          href={navLink3}
        >
          {navLinkText3}
        </Button>
        )}
      </ToolBar>
    </AppBar>
  </div>
);

export default Header;
