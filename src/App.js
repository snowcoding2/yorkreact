import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Alumni from './pages/Alumni'

export default function App () {
    return (
        <BrowserRouter>
            <main>
                <Routes >
                    <Route path="/" element={<Home />}/>
                    <Route path="alumni" element={<Alumni />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}