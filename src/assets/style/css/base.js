const components = {
  MuiCssBaseline: {
    styleOverrides: (theme) => `
        *,
        *::before,
        *::after {
            margin: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        body {
            scroll-behavior: smooth;
            overflow-x: hidden;
            font-size: 100%;
        }

        a {
            text-decoration: none;
        }

        ol,
        ul,
        li {
            list-style: none;
        }

        input,
        button,
        textarea,
        select {
            font: inherit;
        }

        button {
            cursor: pointer;
        }  

        body {
            background-color: ${theme.palette.secondary.main};
            color: ${theme.palette.tertiary.main};
            font-family: ${theme.fonts.main};
        }

        // Scrollbar
        // ::-webkit-scrollbar {
        //     width: 10px;
        //     background-color: var(--scrollbarBackground);
        // }
        // ::-webkit-scrollbar-thumb {
        //     background-color: var(--scrollbarThumbBackground);
        //     border-radius: 10px;
        //     transition: 0.3s;
        // }
        // ::-webkit-scrollbar-thumb:hover {
        //     background-color: var(--scrollbarThumbBackgroundHover);
        // }
        // ::-webkit-scrollbar-thumb:active {
        //     background-color: var(--scrollbarThumbBackgroundActive);
        // }
          
      `,
  },
}

export default components
