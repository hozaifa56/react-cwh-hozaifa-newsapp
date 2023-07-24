import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fb4fb0eb46734404b1f4ab75758327be&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalArticles:parsedData.totalResults })
  }

  handlePrevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fb4fb0eb46734404b1f4ab75758327be&page=${this.state.page -1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
    })
  }
  handleNextCLick= async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/{this.props.pageSize})){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fb4fb0eb46734404b1f4ab75758327be&page=${this.state.page +1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
    })  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Topheadlines</h2>

        <div className='row'>
          {this.state.articles.map((element) => {
            return (<div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>);
          })}

        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary btn-sm mx-2" onClick={this.handlePrevClick}>
            <span>&#8592;</span>Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/{this.props.pageSize})} type="button" className="btn btn-primary btn-sm mx-2" onClick={this.handleNextCLick}>Next<span>&#8594;</span></button>

        </div>
      </div>
    )
  }
}

export default News;
