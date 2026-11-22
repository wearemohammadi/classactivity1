import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const e1= document.getElementById('root')
const root= createRoot(e1)

export function App(){
    return(<h1>hi</h1>)
}

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)