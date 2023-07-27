import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,date,author}=this.props;
        return (
            <div className='my-4'>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted" style={{color:'white'}}>
                                Last updated {new Date(date).toGMTString()} ago by {author}</small></p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-success" rel="noreferrer">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
