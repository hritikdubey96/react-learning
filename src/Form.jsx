function handleOneClick(event){
    console.log("I am submitted!");
    event.preventDefault();
}
export default function From(){
    return(
        <form>
            <input type="text" placeholder="Write somthing" />
            <button onClick={handleOneClick}>Click me!</button>
        </form>
    )
}