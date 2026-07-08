function print(){
    console.log("Hello Mr.Dubey");
}

export default function Button(){
    return(
        <div onClick={print}>
            <button>Click me!</button>
        </div>
    )
}