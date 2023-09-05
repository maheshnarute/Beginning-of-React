import React, { Component } from 'react'

 class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          comments: '', // Changed 'coments' to 'comments'
          topic:'',
          submit:'',
        };
      }
    
      onChangeUsername = (event) => {
        this.setState({
          username: event.target.value,
        });
      };
    
      onCommentChange = (event) => { // Changed 'onComentChange' to 'onCommentChange'
        this.setState({
          comments: event.target.value,
        });
      };
      onchangeTopic=(event)=>{
        this.setState({
        topic:event.target.value,
        });
      };
      handelSubmit=(event)=>{
        this.setState({
            topic:event.target.value,
        });
      };
    
  render() {
   
    return (
        <form onChange={this.handelSubmit}>
      <div>
        <label>username</label>
        {/* <input type='text' value={this.state.username}  onChange={this.onChangeusername}/> */}
        <input
          type="text"
          value={this.state.username}
          onChange={this.onChangeUsername}
        />
        <div>
            <label>coments</label>
            {/* <textarea value={this.state.coments} onChange={this.onComentChange}></textarea> */}
            <textarea
          value={this.state.comments}
          onChange={this.onCommentChange}
        />
        </div>
        <div>
            <select value={this.state.topic} onChange={this.onchangeTopic   }>
                <option>React</option>
                <option>java</option>
                <option>paython</option>
            </select>
        </div>
        <div><button>submit</button></div>
      </div>
      </form>
    )
  }
}

export default FormSubmit