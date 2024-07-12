import React from 'react'
import { Container, PostForm } from '../components'
import useTheme from '../contexts/theme';

function AddPost() {
  const { theme } = useTheme();
  return (
    <div className={`py-8 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost