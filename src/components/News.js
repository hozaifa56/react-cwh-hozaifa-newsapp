import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';
//import Spinner from './Spinner';
//business entertainment general health science sports technology
export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category: "general",

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }




  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount() {
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apikey=fb4fb0eb46734404b1f4ab75758327be&page=1&pagesize=${this.props.pageSize}`;
    //this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
      totalArticles:parsedData.totalResults,
    /*loading:false*/ })
  }

  handlePrevClick= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apikey=fb4fb0eb46734404b1f4ab75758327be&page=1&pagesize=${this.props.pageSize}`;
    //this.setState({loading:false});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
    })
  }
  handleNextCLick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apikey=fb4fb0eb46734404b1f4ab75758327be&page=1&pagesize=${this.props.pageSize}`;
    //this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
    })  
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center" style={{color:"white"}}>NewsMonkey Topheadlines</h2>
        {/*{this.state.loading && <Spinner/>}*/}
        <div className='row'>
        {/*{!this.state.loading && this.state.articles.map((element) => {*/}
          {this.state.articles.map((element) => {
            return (<div className='col-md-3' key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKdAVuCuYh6eMXkQhApiZIFXu1hZFgma8_53yie1LPSaq1qoUodm5e2SFog&s"} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>);
          })}

        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary btn-sm mx-2" onClick={this.handlePrevClick}>
            <span>&#8592;</span>Previous</button>
          <button  type="button" className="btn btn-primary btn-sm mx-2" onClick={this.handleNextCLick}>Next<span>&#8594;</span></button>

        </div>
      </div>
    )
  }
}

export default News;
