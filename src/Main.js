import React from 'react'
import { Box, Heading, TextInput, Button } from 'grommet'
import fetchQrCode from './networkRequests'

const Main = props => {
    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [dob, setDob] = React.useState('')
    const [uid, setUID] = React.useState('')
    const [submitPressed, changeState] = React.useState(false)
    const [qr, setQR] = React.useState(null)
    if(submitPressed) {
        return (
            <Box align='center' flex>
                <img alt='qr code' src={`${qr}`} />
            </Box>
        )
    } else {
        return (
            <Box align='center' flex>
                <Heading margin='small'>Registration</Heading>
                <Box margin={{ top: 'large' }} gap='large' direction='row'>
                    <TextInput
                        placeholder='First name'
                        value={firstname}
                        onChange={event => setFirstname(event.target.value)}
                    />
                    <TextInput
                        placeholder='Last name'
                        value={lastname}
                        onChange={event => setLastname(event.target.value)}
                    />
                </Box>
                <Box margin={{ top: 'small' }} gap='large' direction='row'>
                    <TextInput
                        placeholder='DD/MM/YYYY (DOB)'
                        value={dob}
                        onChange={event => setDob(event.target.value)}
                    />
                    <TextInput
                        placeholder='Unique ID no'
                        value={uid}
                        onChange={event => setUID(event.target.value)}
                    />
                </Box>
                <Box margin={{ top: 'large' }} gap='large' direction='row'>
                    <Button
                        onClick={async () => {
                            changeState(true)
                            const { qr } = await fetchQrCode('https://a58e468e.ngrok.io', { 
                                'FIRST NAME': firstname,
                                'LAST NAME': lastname,
                                'DATE OF BIRTH': dob,
                                'UNIQUE ID NO': uid
                             })
                            console.log(qr)
                            setQR(qr)
                        }}
                        primary
                        label='Submit'
                        hoverIndicator={{ background: 'brand' }}
                    />
                </Box>
            </Box>
        )
    }
}

export default Main