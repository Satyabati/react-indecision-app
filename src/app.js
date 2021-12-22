import React  from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndesicionApp';
import 'normalize.css/normalize.css';
import './style/style.scss';


// class OldSyntax{
//     constructor(){
//         this.name='Mike';
//     }
//     getGreetings(){
//         return `Hi My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// const greetings= oldSyntax.getGreetings;
// //console.log(greetings());
// class NewSyntax{
//     name='Jay';
//     getGreetings =()=>{
//         return `Hi My name is ${this.name}.`;
//     }
// }
// const newSytax = new NewSyntax();
// const newgreetings= newSytax.getGreetings;
// console.log(newgreetings());
// console.log(newSytax);

// const Layout = (props) =>{
//     return(
//   <div>
//   <p>header</p>
//   {props.children}
//   <p>footer</p>
//   </div>
//     );
// }

// const template = (
//     <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     </div>
// )


// ReactDOM.render(
//     (<Layout>
//         <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     <OptionModal/>
//     </div>
//     </Layout>), document.getElementById('app'))

    ReactDOM.render(<IndecisionApp/>
        , document.getElementById('app'))