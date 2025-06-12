'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export default function CustomOrderForm() {
  const radioOptions = [1, 2, 3, 4];
  const metalTypes = ['10 KT', '14 KT', '18 KT', 'PALLADIUM'];
  const metalColors = ['#f5f5f5', '#e0e0e0', '#ffd700', '#a9a9a9'];
  const certifications = ['IGI', 'GIA', 'NAME', 'NAME'];
  const hallmarks = ['BIS', 'NAME', 'NAME', 'NAME'];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {/* Upload Image Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: '1px dashed #ccc',
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#999',
              fontSize: '14px',
            }}
          >
            Upload Image
          </Box>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Make Custom Order
          </Typography>

          {/* Metal Type */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              METAL TYPE
            </Typography>
            <Stack direction="row" spacing={1}>
              {metalTypes.map((type) => (
                <Button key={type} variant="outlined">
                  {type}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Metal Color */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              METAL COLOR
            </Typography>
            <Stack direction="row" spacing={1}>
              {metalColors.map((color, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '4px',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Stack>
          </Stack>

          {/* Quality */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              QUALITY
            </Typography>
            <Stack direction="row" spacing={1}>
              {radioOptions.map((val) => (
                <Button key={val} variant={val === 1 ? 'outlined' : 'text'}>
                  {val}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Item Size */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              ITEM SIZE
            </Typography>
            <Stack direction="row" spacing={1}>
              {radioOptions.map((val) => (
                <Button key={val} variant={val === 1 ? 'outlined' : 'text'}>
                  {val}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Lock Type */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              LOCK TYPE
            </Typography>
            <Stack direction="row" spacing={1}>
              {radioOptions.map((val) => (
                <Button key={val} variant={val === 1 ? 'outlined' : 'text'}>
                  {val}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Certification */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              CERTIFICATION
            </Typography>
            <Stack direction="row" spacing={1}>
              {certifications.map((cert) => (
                <Button key={cert} variant={cert === 'IGI' ? 'outlined' : 'text'}>
                  {cert}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Hallmarking */}
          <Stack spacing={1} mb={2}>
            <Typography variant="body2" fontWeight={600}>
              HALLMARKING
            </Typography>
            <Stack direction="row" spacing={1}>
              {hallmarks.map((mark) => (
                <Button key={mark} variant={mark === 'BIS' ? 'outlined' : 'text'}>
                  {mark}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* Quantity */}
          <Select fullWidth displayEmpty sx={{ mb: 2 }}>
            <MenuItem value="">Quantity</MenuItem>
            {[1, 2, 3, 4, 5].map((q) => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>

          {/* Item Number & Comments */}
          <Stack spacing={2} mb={4}>
            <TextField fullWidth placeholder="Item No." variant="outlined" />
            <TextField fullWidth placeholder="Comments" variant="outlined" multiline rows={4} />
          </Stack>

          <Button fullWidth variant="contained" sx={{ bgcolor: '#2f4eb6' }}>
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
