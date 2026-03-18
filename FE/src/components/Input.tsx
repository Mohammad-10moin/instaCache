export function Input({reference,placeholder}:{reference?:any,placeholder:string}){
    return <div>
        <input type="text" placeholder={placeholder} className="px-4 py-2 rounded border m-2" ref={reference}/>
    </div>
}