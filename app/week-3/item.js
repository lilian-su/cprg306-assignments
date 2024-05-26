//step 1 item is a component accepts props name quantity and category
export default function Item({item}){
let {name, quantity, category} = item;
    return (
        <div className="text-red-300 bg-slate-800 border border-cyan-100 m-10 p-5">
            <h3 className="text-lg">{name}</h3>
            <p>{quantity}</p>
            <p>{category}</p>
        </div>
    )
};
