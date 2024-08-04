import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'

type TicketCardProps = {
	price: number
	airline: string
	origin: string
	destination: string
	departureTime: string
	arrivalTime: string
	duration: string
	transfersCount: number
	transferDuration: string
}

export const TicketCard: React.FC<TicketCardProps> = ({
	price,
	airline,
	origin,
	destination,
	departureTime,
	arrivalTime,
	duration,
	transfersCount,
	transferDuration,
}) => {
	return (
		<Card>
			<CardContent>
				<Box>
					<Typography variant='h5' component='div'>
						{price}
					</Typography>
					<Button>Buy</Button>
				</Box>
				<Box>
					<Typography variant='body2' component='div'>
						{duration} в пути / Пересадок: {transfersCount} - {transferDuration}
					</Typography>
				</Box>
				<Box>
					<Typography variant='body2' component='div'>
						{airline}
					</Typography>
					<Typography variant='body2' component='div'>
						{origin} - {destination}
					</Typography>
					<Typography variant='body2' component='div'>
						{departureTime} - {arrivalTime}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}
