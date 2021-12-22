class Visibility extends React.Component{
  constructor(props){
      super(props);
      this.handleVisibility = this.handleVisibility.bind(this);
      this.state={
      clicked:false
      }

  }
  handleVisibility(){
      this.setState((prevState)=> {
          return{
            clicked: !prevState.clicked
          }
       
      })
  }
  render(){
    return(
        <div>
        <Header title=" Visibility Toggle" />
        {this.state.clicked? <div><button onClick={this.handleVisibility}>Hide Details</button><p>Hey!These are some details you can see now</p></div> :  <div><button onClick={this.handleVisibility}>Show Details</button></div> }
        </div>
    )
}
}
class Header extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));


// const visibilityTitle = {
//     title:'Visibility Toggle',
//     clicked:false,
//     options:[]
// }

// const approot = document.getElementById('app');
// const handleVisibility = () =>{
//     visibilityTitle.clicked = !visibilityTitle.clicked;
//     console.log(visibilityTitle.clicked);
//     renderVisibilityApp();
// }
// const turnOn = () =>{
//     visibilityTitle.clicked = true;
//     console.log(visibilityTitle.clicked);
//     renderVisibilityApp();
// }
// const renderVisibilityApp = () => {
// const template = (<div>
//               <h1>{visibilityTitle.title}</h1> 
//               {visibilityTitle.clicked? <div><button onClick={handleVisibility}>Hide Details</button><p>Hey!These are some details you can see now</p></div> : <button onClick={handleVisibility}>Show Details</button>}
//               </div>);
//               ReactDOM.render(template,approot);
// }


// renderVisibilityApp();


