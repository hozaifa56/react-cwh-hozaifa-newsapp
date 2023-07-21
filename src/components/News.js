import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Topheadlines</h2>
        <div className='row my-2 mx-2'>
        <div className='col-md-4'><NewsItem title="my news"  description="my desc" /></div>
        <div className='col-md-4'><NewsItem title="my news"  description="my desc" /></div>
        <div className='col-md-4'><NewsItem title="my news"  description="my desc" /></div>
        <div className='col-md-4'><NewsItem title="my news"  description="my desc" /></div>
        
        
        </div>
        
      </div>
    )
  }
}

export default News
