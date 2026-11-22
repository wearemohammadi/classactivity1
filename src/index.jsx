import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const e1= document.getElementById('root')
const root= createRoot(e1)

export function App(){
    const name ="marziyeh mohammadi"
    let num = Math.random()
    return(<h1>{name} {num}
    {new Date().toLocaleTimeString()}
    </h1>)
}

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)