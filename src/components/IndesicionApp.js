import Addoptions from './AddOptions'
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import React from 'react';
import OptionModal from "./OptionModal";
 export default class IndecisionApp extends React.Component{
     state = {
        options:[],
        selectedOption:undefined
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
    };
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !==this.state.options.lenght){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data')
        }
    };
    componentWillUnmount(){
        console.log('componentWillUnmount!')
    };
    handleDeleteOptions = ()=>{
        this.setState(() => ({options: []}))
    };
    handlePick= ()=>{
        const randomNumber = Math.floor(Math.random() * this.state.options.length)  ;
        const option = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption:option
        }))
    };
    handleAddOption = (option) =>{
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) =>({options: prevState.options.concat(option)}))
        console.log(option);
    };
    handleDeleteOption = (optionToRemove) =>{
        console.log(optionToRemove);
      this.setState((prevState) =>({
          options: prevState.options.filter((option) => option !==optionToRemove)
      }))
    };
  
    clearOption= () => {
        console.log('invoked');
        this.setState(()=>(
            {
                selectedOption: undefined
            }
            
        ))
    };
        
    
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
            <Header subtitle={subtitle}/>
            <div className="container">
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <div className="widget">
            <Options options={this.state.options} handleDeleteOptions = {this.handleDeleteOptions} handleDeleteOption = {this.handleDeleteOption} removeOptions={this.state.options.length > 0}/>
            <Addoptions handleAddOption={this.handleAddOption}/>
            </div>
            </div>
            <OptionModal selectedOption={this.state.selectedOption} clearOption={this.clearOption}/>
            </div>
        )
    }
}