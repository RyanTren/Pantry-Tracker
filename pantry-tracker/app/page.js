import {Box, Stack} from '@mui/material';

const item = [
  'tomato',
  'potato',
  'onion',
  'garlic',
  'ginger',
  'turmeric',
  'cumin',
  'coriander',
  'cinnamon',
  'cloves',
  'cardamom',
  'black pepper',
  'chili powder',
  'paprika'
]

export default function Home() {
  return (
    <Box
      width = "100vw"
      height = "100vh"
      display = {'flex'}
      justifyContent = {'center'}
      alignItems = {'center'}
    >
      <Stack width = "800px" height= "200px" spacing= {2} overflow= {'auto'}>
        {item.map((i) => (
          <Box
            key = {i}
            bgcolor = {'primary.main'}
            color = {'primary.contrastText'}
            display = {'flex'}
            justifyContent = {'center'}
            alignItems = {'center'}
            width = {'100%'}
            height = {'100%'}
          >
            {i}
          </Box>
        ))
        }
      </Stack>
    </Box>
  );
}
