console.log('app.js is running')

//JSX-JavaScript
const titleSubTitle = {
    title:'Indicision app',
    subtitle:'Put your life in the hands of computer',
    options:[]
}
function getOptions(options){
    return options&& options.length >0 ?<p>Here are the options</p>:<p>No Options</p>;
}
const onFormSubmit = (e) =>{
e.preventDefault();
const option = e.target.elements.option.value;
if(option){
    titleSubTitle.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
}
}
const onButtonClick = () => {
    titleSubTitle.options = [];
    console.log(titleSubTitle.options);
    renderIndecisionApp();
}
const onMakeDecision = () =>{
    const randomNumber = Math.floor(Math.random() * titleSubTitle.options.length)  ;
    const option = titleSubTitle.options[randomNumber];
    alert(option);
    console.log(randomNumber);
}
const approot = document.getElementById('app');
const renderIndecisionApp = () => {
const template = (<div>
              <h1>{titleSubTitle.title}</h1> 
              {titleSubTitle.subtitle && <p>{titleSubTitle.subtitle}</p> }
         
              <p>{(titleSubTitle.options && titleSubTitle.options.length > 0) ?'Choose your option':'No option'}</p>
              <button disabled={titleSubTitle.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
              <button onClick={onButtonClick}>Remove All</button>
              <ol>{
                titleSubTitle.options.map((option) =>  <li key={option}>Option: {option}</li>)
                
              }
               </ol>
              <form onSubmit={onFormSubmit}>
              <input type="text"name="option"/>
              <button>Add Option</button>
              </form>
              </div>);
              ReactDOM.render(template,approot);
}


renderIndecisionApp();


