import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return (
    <Alert 
      status='error' position={"fixed"}
      bottom="4"
      left={"50%"}
      w={"container.lg"}
      transform={"translateX(-50%)"}
    >
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default Error