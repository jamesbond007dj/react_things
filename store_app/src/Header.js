import React from 'react';

class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state={number:0}
        this.increment = this.increment.bind(this)
        this.incrementTen = this.incrementTen.bind(this)
        this.incrementHundred = this.incrementHundred.bind(this)
        this.incrementThousand = this.incrementThousand.bind(this)
        this.decrement = this.decrement.bind(this)
        this.decrementTen = this.decrementTen.bind(this)
        this.decrementHundred = this.decrementHundred.bind(this)
        this.decrementThousand = this.decrementThousand.bind(this)
        }
    
        increment(event){
            this.setState({
                number:this.state.number +1,
            }) 
        }
    
        incrementTen(event){
            this.setState({
                number:this.state.number +10,
            }) 
        }
    
        incrementHundred(event){
            this.setState({
                number:this.state.number +100,
            }) 
        }
    
        incrementThousand(event){
            this.setState({
                number:this.state.number +1000,
            }) 
        }
        
        decrement(event){
            let num = this.state.number-1
            if (num < 0)
                num = 0
            this.setState({
                number:num,
            
            }) 
        }
    
        decrementTen(event){
            let num = this.state.number-10
            if (num < 0)
                num = 0
            this.setState({
                number:num ,
            }) 
        }
    
        decrementHundred(event){
            let num = this.state.number-100
            if (num < 0)
                num = 0
            this.setState({
                number:num ,
            }) 
        }
    
        decrementThousand(event){
            let num = this.state.number-1000
            if (num < 0)
                num = 0
            this.setState({
                number:num ,
            }) 
        }
        prependZero(number) {
            number = number%10000
            if (number < 0)
                return "Product Count: 0000" 
            if (number < 10)
                return "Product Count: 000"+number;
            if (number < 100)
                return "Product Count: 00"+number;
            if (number < 1000)
                return "Product Count: 0"+number;
            if (number < 10000)
                return number;
            else 
                return "Product Count: "(number - 9999)
    
        };
    

    render() {

        let num = this.prependZero(this.state.number)
        return (
            <>
             <h1>STORE APP</h1>
             <h2>Products of James Bond 007</h2>
             <div id="odometer" class="odometer">{num}</div>
             <div>
              <button type="button" onClick ={this.incrementThousand} id="push"> +1000 </button>
              <button type="button" onClick ={this.incrementHundred} id="push"> +100 </button>
              <button type="button" onClick ={this.incrementTen} id="push"> +10 </button>
              <button type="button" onClick ={this.increment} id="push"> +1 </button>
             </div>
             <div>
              <button type="button" onClick ={this.decrementThousand} id="push"> -1000 </button>
              <button type="button" onClick ={this.decrementHundred} id="push"> -100 </button>
              <button type="button" onClick ={this.decrementTen} id="push"> -10 </button>
              <button type="button" onClick ={this.decrement} id="push"> -1 </button>
             </div>
            </>
        );
    }
}

export default Header;