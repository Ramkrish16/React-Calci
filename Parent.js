import React from "react";
class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            prevmsg:''
        }

    }
    change=(event)=>{
        this.setState((prev)=>({
            prevmsg:prev.prevmsg+event.target.value
            
            
        }))
    }

    delchange=(event)=>{
        let em=""
        this.setState((prev)=>({
            prevmsg:this.state.prevmsg.replace(prev.prevmsg,em)
            
            
        }))
    }

    eldelchange=(event)=>{
        
        this.setState((prev)=>({
            prevmsg:this.state.prevmsg.slice(0,-1)
            
            
            
        }))
    }

    tchange=(event)=>{
        this.setState({
            prevmsg:event.target.value
        })
    }

   

    submit=(event)=>{
        event.preventDefault()
        let ans=eval(this.state.prevmsg)

        this.setState((prev)=>({
            prevmsg:ans
        }))

    

    

    }
    
    render(){
        return(<form onSubmit={this.submit}>
            <div className="App"><br></br>
            <h1>My Calculator</h1><br></br>
                <textarea rows={4} cols={40} value={this.state.prevmsg} onChange={this.tchange} /><br></br>
                <button className="button" type="button" value={" "}  onClick={this.eldelchange}>Del</button>&nbsp;
                <button className="button" type="button" value={" "}  onClick={this.delchange}>X</button>&nbsp;
                <button className="button" type='button' onClick={this.submit}>=</button>
                <br></br>
                <button className="button" type="button" value={1}  onClick={this.change}>1</button>&nbsp;
                <button  className="button" type="button" value={2}  onClick={this.change}>2</button>&nbsp;
                <button  className="button" type="button" value={3}  onClick={this.change}>3</button>&nbsp;
                <br></br>
                <button className="button" type="button" value={4}  onClick={this.change}>4</button>&nbsp;
                <button className="button" type="button" value={5}  onClick={this.change}>5</button>&nbsp;
                <button className="button" type="button" value={6}  onClick={this.change}>6</button>&nbsp;
                <br></br>
                <button className="button" type="button" value={7}  onClick={this.change}>7</button>&nbsp;
                <button className="button" type="button" value={8}  onClick={this.change}>8</button>&nbsp;
                <button className="button" type="button" value={9}  onClick={this.change}>9</button>&nbsp;
                <br></br>
                <button className="button" type="button" value={'+'}  onClick={this.change}>+</button>&nbsp;
                <button className="button" type="button" value={0}  onClick={this.change}>0</button>&nbsp;
                <button className="button" type="button" value={'-'}  onClick={this.change}>-</button>&nbsp;
                <br></br>
                <button className="button" type="button" value={'*'}  onClick={this.change}>*</button>&nbsp;
                <button className="button" type="button" value={'/'}  onClick={this.change}>/</button>&nbsp;
                <button className="button" type="button" value={'%'}  onClick={this.change}>%</button>&nbsp;
                <br></br>
                <br></br>

                
            </div>

        </form>
        );
    }
}

export default Parent
