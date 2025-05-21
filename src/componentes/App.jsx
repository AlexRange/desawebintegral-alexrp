import NavBar from './NavBar'
function App() {
   return(
       <>
       <NavBar />
        <div>
           <h1>Bienvenido a mi página Web</h1>
           <hr />
       </div>
       <main className='container'>
        <section className='hero-banner mb-5'>
            <div className='hero-content text-center'>
            <h1 className='display-4'>ShopyFly - Moda para Todos</h1>
            <p className='lead'>Las mejores tendencias a un click</p>
            <button className='btn btn-primary btn-lg'>Ver Coleccion</button>
            </div>
        </section>
       </main>
       </>
   )


}


export default App;