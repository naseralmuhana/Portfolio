import { useState } from "react"

import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import SettingsIcon from "@mui/icons-material/Settings"
import IconButton from "@mui/material/IconButton"
import Switch from "@mui/material/Switch"
import { styled, useTheme } from "@mui/material/styles"
import useThemeContext from "../../contexts/theme/useThemeContext"
import c from "../../constants"
import { Box } from "@mui/material"

const colors = [{ label: c.blue }, { label: c.green }, { label: c.red }]

const ThemeDrawer = () => {
  const theme = useTheme()
  const { toggleMode, changeColor } = useThemeContext()
  const [open, setOpen] = useState(false)
  const handleDrawerClose = () => setOpen(false)
  const handleDrawerOpen = () => setOpen((prev) => !prev)

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {colors.map(({ label }) => (
          <ListItem
            key={label}
            disablePadding
            onClick={() => changeColor(label)}
          >
            <ListItemButton>
              {/* <ListItemIcon>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    bgcolor: bg,
                  }}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider color={theme.palette.tertiary.main} />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={toggleMode} />
      </Box>

      <Divider color={theme.palette.tertiary.main} />
      <Button
        onClick={handleDrawerClose}
        variant="contained"
        sx={{
          marginTop: "1rem",
          width: "100%",
          height: "100px",
        }}
      >
        Close
      </Button>
    </Box>
  )

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleDrawerOpen}
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <SettingsIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        variant="temporary"
        hideBackdrop
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.tertiary.main,
          },
        }}
        draggable
        onDragStartCapture={handleDrawerOpen}
      >
        {list()}
      </Drawer>
    </>
  )
}

export default ThemeDrawer

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#121212"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#121212"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}))
