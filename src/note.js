import React, {Component} from 'react'
import { FaPencilAlt, FaTrash, FaSave } from 'react-icons/fa';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state= {
            editing: false
        }
        this.edit= this.edit.bind(this)
        this.remove= this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
    }
    edit() {
        this.setState({
            editing: true
        })
    }
    save() {
        alert('saved')
    }
    remove () {
        alert('removing note')
    }
    renderForm(){
        return(
            <div className="note">
                <form>
                    <textarea/>
                    <button onClick={this.save}><FaSave /></button>
                </form>
            </div>
        )
    }
    renderDisplay () {
        return (
            <div className="note"> 
                <p>Learn React</p>
                <button onClick={this.edit} id="edit"><FaPencilAlt/></button>
                <button onClick={this.remove} id="remove"><FaTrash/></button>
            </div>
        )
    }
    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default Note