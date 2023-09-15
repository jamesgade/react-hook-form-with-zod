import './App.css'
// import FormWithoutReactHookForm  from './components/form-without-react-hook-form'
import FormWithReactHookForm  from './components/form-with-react-hook-form'

function App() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* <FormWithoutReactHookForm/> */}
      <FormWithReactHookForm/>
    </main>
  )
}

export default App
