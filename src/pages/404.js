import React from 'react'
import { Container } from 'reactstrap'

import Layout from '../components/layout'

const NotFoundPage = () => (
	<Layout>
		<Container className="page-404">
			<h1 className="text-center">404</h1>
			<h2 className="text-center">Page Not Found :(</h2>
		</Container>
	</Layout>
)

export default NotFoundPage
