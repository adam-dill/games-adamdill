import React from 'react';

export default class ApiEntry extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const bodyHidden = (this.props.exampleBody !== undefined) ? '' : 'd-none';
        
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.method} <a href={this.props.url} target="_blank">{this.props.url}</a>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.description}</p>
                    <button className={`btn btn-outline-secondary ${bodyHidden}`} type="button" data-toggle="collapse" data-target={`#collapseBodyExample${this.props.id}`} aria-expanded="false" aria-controls="collapseExample">
                        Example body:
                    </button>
                    <pre id={`collapseBodyExample${this.props.id}`} className={`collapse ${bodyHidden}`} >
                        <code>{this.props.exampleBody}
                        </code> 
                    </pre>
                    <div className={bodyHidden}><br /></div>
                    <button className="btn btn-outline-secondary" type="button" data-toggle="collapse" data-target={`#collapseResponseExample${this.props.id}`} aria-expanded="false" aria-controls="collapseExample">
                        Example response:
                    </button>
                    <pre id={`collapseResponseExample${this.props.id}`} className="collapse" >
                        <code>{this.props.exampleResponse}
                        </code> 
                    </pre> 
                </div>
            </div>
        )
    }
}