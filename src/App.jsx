import useFetch from './useFetch'

function App() {

  let [data, error, isLoading, isSuccess] = useFetch('https://fakestoreapi.com/pro')
  
  console.log(data, error, isLoading, isSuccess)

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
