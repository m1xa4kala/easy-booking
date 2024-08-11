import React from 'react'
import { NavLink } from 'react-router-dom'

export const DashboardNav: React.FC = () => {
	return (
		<Box>
			<Stack direction={'row'} spacing={2} p={2} justifyContent={'center'} alignItems={'center'}>
				<Button component={NavLink} to={'/admin/flights'} variant='contained'>
					Flights
				</Button>
				<Button component={NavLink} to={'/admin/current-flights'} variant='contained'>
					Current Flights
				</Button>
				<Button component={NavLink} to={'/admin/users'} variant='contained'>
					Users
				</Button>
				<Button component={NavLink} to={'/admin/companies'} variant='contained'>
					Companies
				</Button>
				<Button component={NavLink} to={'/admin/buses'} variant='contained'>
					Buses
				</Button>
				<Button component={NavLink} to={'/admin/flight-routes'} variant='contained'>
					Routes
				</Button>
				<Button component={NavLink} to={'/admin/stations'} variant='contained'>
					Stations
				</Button>
			</Stack>
		</Box>
	)
}
