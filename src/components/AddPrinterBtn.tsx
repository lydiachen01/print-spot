import { Button } from "@mui/material";
import { alpha, createTheme, getContrastRatio, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    salmon: Palette['primary'];
  }
  interface PaletteOptions {
    salmon?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      salmon: true;
    }
  }  

const AddPrinterBtn: React.FC = () => {
    let theme = createTheme({
        palette: {
            contrastThreshold: 4.5,
          },
    });
    
    const baseColor = alpha('#D62839', 0.8)

    theme = createTheme(theme, {
        palette: {
            salmon: theme.palette.augmentColor({
            color: {
                main: baseColor,
                light: alpha(baseColor, 0.5),
                dark: alpha(baseColor, 0.9),
                contrastText: getContrastRatio(baseColor, '#fff') > 1.5 ? '#fff' : '#111',
            },
            name: 'salmon',
            }),
        },
    });
      

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="salmon">Add Printer</Button>
        </ThemeProvider>
    )
}

export default AddPrinterBtn;