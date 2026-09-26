function App() {
    return (
        <>
            <div>
                <h1>Hello, React!</h1>
            </div>

            <nav>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">About</NavLink>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">Pages</NavLink>
                <NavLink className={({isActive}) => isActive ? styles['selected-link'] : ''} to="/">Contact</NavLink>
            </nav>
        </>
    )
}

export default App
