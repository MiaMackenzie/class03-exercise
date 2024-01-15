import { useEffect } from "react"
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"

export default function ExampleTwo() {
    // The [] make sure the useEffect only runs once

    /**
     * code on pages will run twice
     * Once to render what we want and to find bugs
     */
    useEffect(() => {
        console.log("RUN");
    }, [])
    return(
        <>
        <Header/>
        <main>
            <h1>Example2</h1>
        </main>
        <Footer/>
        
        </>
    )
}