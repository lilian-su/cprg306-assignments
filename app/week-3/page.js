
//call item-list has component ItemList
import ItemList from "./item-list";
//create a functional component Page
//returns main element with h1 shopping list header and Item list component
export default function Page(){
    return (
        <main className="h-screen m-10 p-5">
            <h1 className="text-2xl">Shopping List</h1>
            <ItemList/>

        </main>
    )
}