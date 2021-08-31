/* eslint-disable no-alert */
import React, { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

enum ColourPalette {
  PastelBlueDark = '#123C69',
  PastelCoralDark = '#AC3B61',
  PastelGrayLight = '#BAB2B5'
}
export interface HeaderProps {
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
   * Nav Link 2 contents
   */
  navLinkText2?: string;
  /**
   * Nav Link 1 contents
   */
  navLinkText3?: string;
}

const divStyle = {
  padding: '20px',
  margin: '20px',
};

const Header: FC<HeaderProps> = ({
  backgroundColor = ColourPalette.PastelCoralDark,
  headerText,
  navLinkText1,
  navLinkText2,
  navLinkText3,
}: HeaderProps) => (
  <div style={divStyle}>
    <AppBar style={'backgroundColor' ? { backgroundColor } : {}}>
      <ToolBar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {headerText}
        </Typography>
        {navLinkText1 && (
        <Button
          size="small"
          variant="outlined"
          onClick={() => { alert('clicked'); }}
        >
          {navLinkText1}
        </Button>
        )}
        {navLinkText2 && (
        <Button size="small" variant="outlined">{navLinkText2}</Button>)}
        {navLinkText3 && (
        <Button size="small" variant="outlined">{navLinkText3}</Button>)}
      </ToolBar>
    </AppBar>
  </div>
);

export default Header;
