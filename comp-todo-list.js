import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyFruits: ["Applee","Banana","Mango"],
        }
    }
    
    addItem = (e) => {
         e.preventDefault();
         const {buyFruits} = this.state;
         const newFruitEntry = this.newFruits.value;
         this.setState({
             buyFruits: [...this.state.buyFruits, newFruitEntry]
         })
     }
    render() {
        const {buyFruits} = this.state;
        return (
            <div>
                <form onSubmit={(e)=>this.addItem(e)}> 
                    <input label="Enter Fruit Name"  id="NewFruits" fullWidth color="inherit" ref={input => this.newFruits = input}/>
                    <Button type="submit" > Add</Button>
                </form>
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
                                    <td>Remove Button</td>
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