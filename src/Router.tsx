import { Route, Routes, BrowserRouter } from "react-router-dom"

import { Event } from './pages/Event'
import { Subscribe } from "./pages/Subscribe"

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Subscribe />} />
				<Route path="event" element={<Event />}>
					<Route path="lesson/:slug" index={false} element={<Event />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
