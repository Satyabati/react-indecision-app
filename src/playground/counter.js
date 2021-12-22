class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state={
            count:0
        }
    }
    handleAddOne(){
        this.setState((prevState) =>{
            return {
                count:prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return {
                count:prevState.count - 1
            }
        })
    }
    handleReset(){
    //     this.setState({
    //             count:0
            
    //     })
    //     this.setState({
    //         count:this.state.count+1
        
    // })
    this.setState(() =>{
        return {
            count:0
        }
    })
    this.setState((prevState) =>{
        return {
            count:prevState.count+1
        }
    })
    }
    componentDidMount(){
        try{
        let count = localStorage.getItem('count');
        count =parseInt(localStorage.getItem('count'))
        console.log(count)
        if(!isNaN(count)){
            this.setState(() =>({
                count
            }));
        }
    }catch(err){

    }
        
        console.log('fetching data')
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.state.count)
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
            console.log('saving data')
        }
    }
    render(){
        return(
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps={
//     count:8
// }

ReactDOM.render(<Counter />,document.getElementById('app'));









//ceate a templateTwo var 
// const user={
//     name:'Andrew',
//     age:19,
//     location:'Google'
// }
// function getLocation(location){
//     return location?<p>Location:{location}</p> : undefined;
// }
// const templateTwo = (<div>
//                    <h1>{user.name?user.name:'Anonymous'}</h1>
//                    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
                   
//                   {getLocation(user.location)}
//                    </div>)
// const approot = document.getElementById('app');
// let count = 0;
// const someId = 'myidhere';
// const addOne = () =>{
//     count++;
//     console.log('add one',count);
//     renderCounterApp();
// }
// const minusOne = () =>{
//     console.log('minus one');
//     count--;
//     renderCounterApp();
// }
// const reset = () =>{
//     console.log('reset');
//     count = 0;
//     renderCounterApp();
// }
// const renderCounterApp = () =>{
//     const templateTwo = (<div>
//         <h1>Count:{count}</h1>
//         <button id={someId} className="button" onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>);
//     console.log(templateTwo);
//     ReactDOM.render(templateTwo,approot)
// }

// renderCounterApp();