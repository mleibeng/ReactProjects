import Header from "./src/components/Header"
import Entry from "./src/components/Entry"
import { destinations } from "./data/data"

/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 *
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */



export default function App() {
    return (
        <>
            <Header />
            <main className="container">
              {destinations.map((destination) => (
                <Entry
                  key={destination.id}
                  {...destination}
                />
              ))}
            </main>
        </>
    )
}

// const nums = [1,2,3,4,5]

// const result = nums.map(x => x * x)

// const names = ["alice", "bob", "charlie", "danielle"]

// const nameresult = names.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

// // const ppokemon = pokemon.map( x => "<p>" + x + "</p>")
// const pppokemon = pokemon.map(x => `<p>${x}</p>`)

// console.log(pppokemon)