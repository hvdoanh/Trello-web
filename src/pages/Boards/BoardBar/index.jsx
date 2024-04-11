import Box from "@mui/material/Box";
function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      board bar
    </Box>
  );
}

export default BoardBar;