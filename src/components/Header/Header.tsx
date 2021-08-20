import React from "react";

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


export interface HeaderProps  {
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
};

enum ColourPalette {
  PastelBlueDark = '#123C69',
  PastelCoralDark = '#AC3B61',
  PastelGrayLight = '#BAB2B5'
}

const divStyle = {
  padding: "20px",
  margin: "20px",
};

const Header = ({
  backgroundColor = ColourPalette.PastelCoralDark,
  headerText,
  navLinkText1,
  navLinkText2,
  navLinkText3,
}: HeaderProps) => {
  return (
    <div style={divStyle}>
      <AppBar style={"backgroundColor" ? { backgroundColor }: {}}>
        <ToolBar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {headerText}
          </Typography>
          <Button>
            {navLinkText1}
          </Button>
          <Button>
            {navLinkText2}
          </Button>
          <Button>
            {navLinkText3}
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;