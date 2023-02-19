import { useState } from "react"
import Box from "@mui/material/Box"
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

import c from "../../constants"
import blue from "../../assets/style/theme/colors/blue"
import deepPurple from "../../assets/style/theme/colors/deepPurple"
import green from "../../assets/style/theme/colors/green"
import orange from "../../assets/style/theme/colors/orange"
import pink from "../../assets/style/theme/colors/pink"
import purple from "../../assets/style/theme/colors/purple"
import red from "../../assets/style/theme/colors/red"
import teal from "../../assets/style/theme/colors/teal"
import yellow from "../../assets/style/theme/colors/yellow"
import useThemeContext from "../../contexts/theme/useThemeContext"

const modes = [c.darkLabel, c.lightLabel]
const colors = [
  { label: c.blueLabel, bg: blue.main },
  { label: c.deepPurpleLabel, bg: deepPurple.main },
  { label: c.greenLabel, bg: green.main },
  { label: c.orangeLabel, bg: orange.main },
  { label: c.pinkLabel, bg: pink.main },
  { label: c.purpleLabel, bg: purple.main },
  { label: c.redLabel, bg: red.main },
  { label: c.tealLabel, bg: teal.main },
  { label: c.yellowLabel, bg: yellow.main },
]

const ThemeDrawer = () => {
  const { toggleMode, changeColor } = useThemeContext()
  const [open, setOpen] = useState(false)
  const handleDrawerClose = () => setOpen(false)
  const handleDrawerOpen = () => setOpen((prev) => !prev)

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {colors.map(({ label, bg }) => (
          <ListItem
            key={label}
            disablePadding
            onClick={() => changeColor(label)}
          >
            <ListItemButton>
              <ListItemIcon>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    bgcolor: bg,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider color="#eaeaea" />
      <List>
        {modes.map((text) => (
          <ListItem key={text} disablePadding onClick={toggleMode}>
            <ListItemButton>
              <ListItemIcon>
                <Box
                  bgcolor={text === c.darkLabel ? "black" : "white"}
                  sx={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                color={text === c.darkLabel ? "black" : "white"}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider color="#eaeaea" />
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
          position: "absolute",
          bottom: 0,
          right: 0,
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
            bgcolor: "#212121",
            color: "#eaeaea",
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
