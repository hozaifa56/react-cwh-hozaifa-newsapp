import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8, 
        category: 'general',
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){ 
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb4fb0eb46734404b1f4ab75758327be&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.props.setProgress(70);
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false});
        this.props.setProgress(100);
            
    }

     handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb4fb0eb46734404b1f4ab75758327be&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(40);
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        this.props.setProgress(100);
    }
    
     handleNextClick = async ()=>{
        console.log("Next"); 
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb4fb0eb46734404b1f4ab75758327be&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.props.setProgress(40);
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json() 
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
            this.props.setProgress(100);
    }
        }

    render() { 
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px',color:'white'}}>NewsMonkey - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row"> 
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://media.istockphoto.com/id/1440979913/photo/view-of-stacked-newspapers-on-blurred-background.webp?b=1&s=170667a&w=0&k=20&c=6Kn30RmS2WQthvlh9sTX1BKbaXMYtMQw57_h3zJ5RzM="} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
