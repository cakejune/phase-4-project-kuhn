export default function CoolButton(){
    
    function turnUpRed(e){
        //click fuinctionality that turns the element red
    }
    
    return (
        <button turnUpRed={turnUpRed} style={{buttonStyles}}>
            hello
        </button>
    )


    const buttonStyles={
        color: 'red'
    }
}