//step 1 item is a component accepts props name quantity and category
export default function Item({item}){
let {name, quantity, category} = item;
    return (
        <div className="p-2 my-4 bg-cyan-500 border-2 border-amber-900 w-80">
            <h3 className="text-2xl ">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
};
