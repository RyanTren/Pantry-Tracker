import {Box, Stack, Typography} from '@mui/material';

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
      flexDirection = {'column'}
      justifyContent = {'center'}
      alignItems = {'center'}
    >
      <Box border={'1px solid #333'}>
      <Box width="800px" height="100px" bgcolor={'#ADD8E6'} display={'flex'} justifyContent={'center'} alignItems={'center'} border={'1px solid #333'}>
        <Typography variant={'h2'} color={'#333'} textAlign={'center'} >
          Pantry Items
        </Typography>
      </Box>
      <Stack width = "800px" height = "300px" spacing= {2} overflow= {'auto'}>
        {item.map((i) => (
          <Box
            key = {i}
            bgcolor = {'#f0f0f0'}
            color = {'black'}
            display = {'flex'}
            justifyContent = {'center'}
            alignItems = {'center'}
            width = {'100%'}
            height = {'300px'}
          >
            <Typography variant= {'h3'} color = {'#333'} textAlign = {'center'}>
              {
                // capitalize the first letter of the item
                i.charAt(0).toUpperCase() + i.slice(1)
              }
            </Typography>
          </Box>
        ))
        }
      </Stack>
      </Box>
    </Box>
  );
}
