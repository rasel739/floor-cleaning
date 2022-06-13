import React from "react";
import AboutCustomImport from "../../../About/AboutCustomImport/AboutCustomImport";

const ContactFromRight = () => {
  const { Box, TextField, Grid, Button, SendIcon } = AboutCustomImport();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "85%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: "85%" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Your message subject"
              variant="outlined"
              sx={{ width: "85%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <TextField
              id="outlined-basic"
              label="Your Message"
              multiline
              variant="outlined"
              sx={{ width: "85%" }}
              rows={3}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ width: "30%", ml: -39 }}
            >
              SEND MESSAGE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactFromRight;
