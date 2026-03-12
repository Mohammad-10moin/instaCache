export function Input({onChange,placeholder}:{onChange?:()=>void,placeholder:string}){
    return <div>
        <input type="text" placeholder={placeholder} className="px-4 py-2 rounded border m-2" onChange={onChange}/>
    </div>
}