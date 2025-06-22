"use client";

import { Box, Stack, Typography, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const steps = ["Cart", "Delivery Details", "Review & Pay"];

export default function HorizontalStepper({
  activeStep = 0,
}: {
  activeStep: number;
}) {
  return (
    <Box sx={{ width: "100%", background: "#fff", px: 3, py: 2 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, sm: 0 }}
      >
        {steps.map((label, index) => (
          <StepItem
            key={index}
            index={index}
            label={label}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            isLast={index === steps.length - 1}
          />
        ))}
      </Stack>
    </Box>
  );
}

const StepCircle = styled("div")<{
  active: boolean;
  completed: boolean;
}>(({ active, completed }) => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  backgroundColor: completed ? "#197A48" : active ? "#445B9C" : "#fff",
  color: completed || active ? "#fff" : "#777",
  border: `1px solid ${completed ? "#197A48" : active ? "#445B9C" : "#D5D5D5"}`,
  fontWeight: 600,
  fontSize: 14,
  fontFamily: "Jost, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function StepItem({
  index,
  label,
  isActive,
  isCompleted,
  isLast,
}: {
  index: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  isLast: boolean;
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        "@media (max-width:540px)": {
          flexDirection: "column",
          margin: "0 20px!important",
        },
        "& > :not(style) ~ :not(style)": {
          margin: {
            xs: '0 auto',
            sm: undefined,
          },
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 0, sm: 2 }}
        sx={{
          margin: "0 20px",
          "@media (max-width:540px)": {
            display: "block",
            margin: "0",
          },
        }}
      >
        <StepCircle
          active={isActive}
          completed={isCompleted}
          sx={{ "@media (max-width:540px)": { margin: "10px auto!important" } }}
        >
          {isCompleted ? <CheckIcon sx={{ fontSize: 18 }} /> : index + 1}
        </StepCircle>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 16,
            color: isActive ? "#445B9C" : isCompleted ? "#000" : "#5e5e5e",
            fontFamily: "Jost, sans-serif",
            whiteSpace: "nowrap",
            "@media (max-width:540px)": { marginLeft: "0!important" },
          }}
        >
          {label}
        </Typography>
      </Stack>

      {!isLast && (
        <Box
          sx={{
            width: 120,
            height: "1px",
            backgroundColor: "#ccc",
            mx: 3,
            borderRadius: 2,
            "@media (max-width:540px)": {
              display: "none",
            },
          }}
        />
      )}
    </Stack>
  );
}
