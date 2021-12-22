// const obj = {
//     name:'Vikram',
//     getName(){
//         return this.name;
//     }
// }
// const getName = obj.getName.bind(obj);
// console.log(getName());
// const func = function(){
//     console.log(this);
// }

class IndecisionApp extends React.Component{
    constructor(props){
      super(props);
      this.state={
          options:[]
      }
      this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption= this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount(){
        try{
        const json = localStorage.getItem('options');
        const options= JSON.parse(json);
        if(options){
            this.setState(() =>({
                options
            }));
        }
    }catch(err){

    }
        
        console.log('fetching data')
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !==this.state.options.lenght){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data')
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!')
    }
    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }
    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length)  ;
        const option = this.state.options[randomNumber];
        alert(option);
    }
    handleAddOption(option) {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) =>({options: prevState.options.concat(option)}))
        console.log(option);
    }
    handleDeleteOption(optionToRemove){
        console.log(optionToRemove);
      this.setState((prevState) =>({
          options: prevState.options.filter((option) => option !==optionToRemove)
      }))
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions} handleDeleteOption = {this.handleDeleteOption} removeOptions={this.state.options.length > 0}/>
            <Addoptions handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}



const Header = (props) =>{
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    )
}

Header.defaultProps = {
    title:'Indecision'
}
// class Header extends React.Component {
// render(){
//     console.log(this.props)
//     return (
//         <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//         </div>
//     )
// }
// }
const Action = (props)=> {
    return (
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}
// class Action extends React.Component{
//     render(){
//       return (
//           <div>
//           <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//           </div>
//       )
//     }
// }

const Options = (props) =>{
        return(
            <div>
            <ol>
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    option={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ) )
            }
            <button onClick={props.handleDeleteOptions} disabled={!props.removeOptions}>Remove All</button>
            {props.options.length ===0 && <p>Please add an option to get started</p>}
           </ol>
            </div>
        )
    
}
// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//             <ol>
//             {
//                 this.props.options.map((option) =>  <Option key={option} option={option} />)
//             }
//             <button onClick={this.props.handleDeleteOptions} disabled={!this.props.removeOptions}>Remove All</button>
//            </ol>
//             </div>
//         )
//     }
// }
const Option = (props) =>{
    return(
        <div>
      <li> {props.option}</li>
      <button onClick={(e)=> (props.handleDeleteOption(props.option))}>Remove</button>
        </div>
    )
}
// class Option extends React.Component{
//     render(){
//         console.log(this.props.option)
//         return(
//             <div>
//           <li> {this.props.option}</li>
//             </div>
//         )
//     }
// }

class Addoptions extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state={
            error:undefined
        }

    }
     onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
       this.setState(() =>({error}))
        if(!error){
            e.target.elements.option.value='';
        }
        }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onFormSubmit}>
              <input type="text"name="option"/>
              <button >Add Option</button>
              </form>
              </div>
        )
    }
}

// const User = (props) =>{
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age:{props.age} </p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))