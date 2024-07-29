"use client"

import { firestore } from '@/firebase';
import {Box, Stack, Typography, Button} from '@mui/material';
import { Firestore } from 'firebase/firestore';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pantry, setPantry] = useState([]);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    const updatePantry = async () =>  {
      const snapshot = collection(firestore, 'pantry');
      const docs = await getDocs(snapshot);
      const pantryList = [];
      docs.forEach(doc => {
        pantryList.push(doc.id);
      });
      console.log(pantryList);
      setPantry(pantryList);
    }
    updatePantry();
  }, [])

  return (
    <Box
      width = "100vw"
      height = "100vh"
      display = {'flex'}
      flexDirection = {'column'}
      justifyContent = {'center'}
      alignItems = {'center'}
      gap = {2}
    >
      <Button variant="contained">Add</Button>
      <Box border={'1px solid #333'}>
      <Box width="800px" height="100px" bgcolor={'#ADD8E6'} display={'flex'} justifyContent={'center'} alignItems={'center'} border={'1px solid #333'}>
        <Typography variant={'h2'} color={'#333'} textAlign={'center'} >
          Pantry Items
        </Typography>
      </Box>
      <Stack width = "800px" height = "300px" spacing= {2} overflow= {'auto'}>
        {pantry.map((i) => (
          <Box
            key = {i}
            bgcolor = {'#f0f0f0'}
            color = {'black'}
            display = {'flex'}
            justifyContent = {'center'}
            alignItems = {'center'}
            width = {'100%'}
            minHeight = {'150px'}
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
