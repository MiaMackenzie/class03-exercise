import { useEffect, useState } from "react"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);
    /**usually this will cause an infinte loop so it is best not to do this incase your code breaks
     * code on pages will run two times
     * Once to render what we want and another is to render strict mode to find common bugs
     */
    useEffect(() => {
        console.log(number);
    })
    return(
        <>
            <Header/>
            <main>
                <h1>Example1</h1>
                <div>Infinite loop</div>
            </main>
        
        <Footer/>
        </>
    )
}