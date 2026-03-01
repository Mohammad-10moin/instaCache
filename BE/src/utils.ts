export function randomhash(len:number):string{
    const str="abcdefghijklmnopqrstuvwxyz1234567890"
    let ans=""
    for(let i=0;i<len;i++){
        ans+=str[Math.floor(Math.random()*str.length)]
    }
    return ans;
}