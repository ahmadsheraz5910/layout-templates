import { createTheme, responsiveFontSizes} from '@mui/material/styles';


const CSSBaseline = {
  palette: {
    primary: {
      main: "#E02424"
    },
    secondary: {
      main:"#057A55"
    }
  },
  typography: {
    fontFamily:"Inter",
    fontSize:12,
    body1:{
      fontWeight:500,
    }
  }
}

export default responsiveFontSizes(createTheme(CSSBaseline))