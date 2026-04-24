import { Toaster } from "sonner"
import Form from "./components/Form"


function App() {

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="bg-(--bg-container) w-full max-w-2xl p-6 md:p-10 rounded-2xl flex flex-col gap-8">
            <h1 className="font-(--karla-bold) text-text text-3xl text-left">
                Contact Us
            </h1>
            <Form />
            <Toaster
                position="top-right"
            />
        </div>
    </div>
  )
}

export default App
