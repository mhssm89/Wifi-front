import React from "react";

import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Grid,
  Dialog,
  Button,
} from "@material-ui/core";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useTable from "../../src/control/UseTable";
import axios from "axios";
const useStyles = makeStyles(() => ({
  root: {},
}));

// const query = [
//   {
//     ssid: "tet0",
//     mac: "##################",
//     security: "WPA2",
//   },
//   {
//     ssid: "tet1",
//     mac: "##################",
//     security: "WPA2",
//   },
//   {
//     ssid: "tet2",
//     mac: "##################",
//     security: "WPA2",
//   },
//   {
//     ssid: "tet3",
//     mac: "##################",
//     security: "WPA2",
//   },
// ];

function WifiList({ query }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ ssid: "", password: "" });

  const {
    // items,
    selectedItems,
    isLoading: isTableLoading,
  } = useTable({ query });

  function handelPassword(password) {
    const newdata = { ...data, password: password };
    setData(newdata);
  }

  function handelSubmit() {
    axios
      .post("localhost:9000/connect", data)
      .catch((e) => console.log(e))
      .then((x) => console.log(x));
  }

  function handelSsid(ssid) {
    const newdata = { ...data, ssid: ssid };
    setData(newdata);
  }

  return (
    <div>
      <Card>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Network Name</TableCell>
                <TableCell>MAC address</TableCell>

                <TableCell>Encryption</TableCell>
                <TableCell align="right">connect</TableCell>
              </TableRow>
            </TableHead>
            {isTableLoading ? (
              <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
              </Box>
            ) : (
              <TableBody>
                {query.map((item) => {
                  return (
                    <TableRow
                      hover
                      key={item.mac}
                      selected={selectedItems.indexOf(item.ssid) !== -1}
                    >
                      <TableCell>{item.ssid}</TableCell>
                      <TableCell>{item.mac}</TableCell>

                      <TableCell>{item.security[0]}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            setOpen(true);
                            handelSsid(item.ssid);
                          }}
                        >
                          <SvgIcon fontSize="small">
                            <NetworkWifiIcon />
                          </SvgIcon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Wifi network Password</DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>
              Please enter the selected Wifi network password you want to
              connect
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="password"
              id="password"
              label="Wifi password"
              type="password"
              fullWidth
              variant="standard"
              value={data.password}
              onChange={(e) => handelPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button onClick={() => handelSubmit()}>Connect</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default WifiList;
