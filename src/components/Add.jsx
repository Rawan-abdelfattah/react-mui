import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import React, { useState } from "react";
import styled from "@emotion/styled";

const Add = () => {
  const MyModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px )", md: "2.5%" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <MyModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width="400px"
          height="300px"
          bgcolor="white"
          borderRadius="20px"
          p={3}
          bgcolor={'background.default'} color={'text.primary'}
        >
          <Typography color={"gray"} textAlign={"center"} variant="h6">
            Create Your Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              sx={{ width: 30, height: 30 }}
            />

            <Typography variant="span" fontWeight={"500"}>
              Rwan Fathy
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="what is in your mind ?!!!!!"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={4} mb={4}>
            <SentimentSatisfiedAltIcon color="primary" />
            <InsertPhotoIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>post</Button>
            <Button sx={{width:'100px'}}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </>
  );
};

export default Add;
