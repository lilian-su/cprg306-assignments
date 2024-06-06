
//call item-list has component ItemList
import ItemList from "./item-list";
//create a functional component Page
//returns main element with h1 shopping list header and Item list component
export default function Page(){
    return (
        <main className="p-5 bg-amber-300">
            <h1 className="text-4xl text-yellow-800 font-bold font-mono" >Shopping List</h1>
            <ItemList/>

        </main>
    )
}