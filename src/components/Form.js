import React, {Component} from 'react';
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            poster:'',
            comment:'',
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
            alert(`Film ajouté avec l'ID ${res.id} !`);
        })
        .catch(e => {
            console.error(e);
            alert(`Erreur lors de l'ajout du film : ${e.message}`);
        });
    }
 
    render() { 
        const { title } = this.state;
        const { poster } = this.state;
        const { comment } = this.state;
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="film">Choix du film</label>
                        <input className="form-control" type="text" id="film" name="title" onChange={this.handleChange} value={title} required></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="url">Saisie ton URL</label>
                        <input className="form-control" type="text" id="url" name="poster" onChange={this.handleChange}value={poster} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="commentaire">Ajoute un commentaire</label>
                        <textarea className="form-control" type="text" id="commentaire" name="comment" onChange={this.handleChange}value={comment} required></textarea>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Envoyer" />
                </form>
            </div>
         );
    }
}
 
export default Form;