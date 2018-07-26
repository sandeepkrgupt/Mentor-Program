import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

const style= {
    color: "red",
}
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyFruits: ["Applee","Banana","Mango"],
        }
    }
    
    addItem = (e) => {
         e.preventDefault();  // Will Not Allow the page to Refresh on Button Click
         const {buyFruits} = this.state;
         const newFruitEntry = this.newFruits.value;  // setting the value of Input using ref property
         const isOnTheList = buyFruits.includes(newFruitEntry); 
        if(isOnTheList) {
             this.setState({
                 message: "This Item is in the List",
             })
        }
        else {
            newFruitEntry !== '' && this.setState({
            buyFruits:[...this.state.buyFruits, newFruitEntry],
            message: ''
            })
        }
         this.AddFruitForm.reset();
     }

     removeItem(item) {
         alert("You Want To Remove = "  + item);
        const removeBuyItem = this.state.buyFruits.filter(buyItem => {
            return buyItem !== item;
        });
        this.setState({
            buyFruits: [...removeBuyItem]
        });
        if(removeBuyItem.length == 0) {
           this.setState({
                 message: "No Item in the list",
             })
         }
     }
    render() {
        const {buyFruits, message} = this.state; // passing the objects to show their values
        return (
            <div>
                <form onSubmit={(e)=>this.addItem(e)} ref={formBuyFruit => this.AddFruitForm = formBuyFruit}> 
                    <input label="Enter Fruit Name"  id="NewFruits" fullWidth color="inherit" ref={txtInput => this.newFruits = txtInput}/>
                    <Button type="submit" > Add</Button>
                </form>
                
                {
                    message !== '' && <b style={style}>{message}</b>
                }
                <table>
                    <thead>
                        <th>Fruit</th><th>Edit</th>
                    </thead>
                    <tbody>
                    {
                        buyFruits.map(item => {
                            return(
                                <tr key={item}>
                                    <td>{item}</td>
                                    <td><Button type="button" onClick={(e) => this.removeItem(item)}>Remove</Button></td>
                                </tr>
                            );
                        })    
                    }           
                    </tbody>                    
                </table>
            </div>
        );
    }
}

export default TodoList;
