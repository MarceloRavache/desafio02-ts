import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

interface SubmitLoginProps  {
  login: () => void
}

export const SubmitLogin: FC<SubmitLoginProps & ButtonProps> = ({login}) => {
    return <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
    Button
  </Button>
}