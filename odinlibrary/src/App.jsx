import { useState } from "react"
//import { clsx } from "clsx"
import Header from "./components/Header"
import Main from "./components/Main"



export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <main>
      <Header selected={selected} setSelected={setSelected} />
      <Main selected={selected} />
    </main>
  )
}