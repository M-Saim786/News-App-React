import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader';

export class News extends Component {
    articles = []
    baseUrl = ''
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            baseUrl: this.baseUrl,

        }
    }

    async componentDidMount() {
        let newUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ccbe1df302454b6481d2d8b9153b17c0'
        await this.setState({ baseUrl: newUrl })
        console.log(this.state.baseUrl)
        let data = await fetch(this.state.baseUrl)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }

    render() {
        const getIn = async () => {
            console.log(this.baseUrl)
            let newUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ccbe1df302454b6481d2d8b9153b17c0'
            await this.setState({ baseUrl: newUrl })
            let data = await fetch(this.state.baseUrl)
            let parsedData = await data.json()
            this.setState({ articles: parsedData.articles })
        }

        return (
            <>
                <h2 className='my-2 text-center'>Latest News of US</h2>
                <div className='container my-3' >
                    <div className="row mx-2" >
                        {
                            this.state.articles !== null?
                            this.state.articles.map((article) => {
                                if (article.description != null || article.urlToImage != null) {
                                    return (
                                        <div className="mx-4 my-2 col col-lg-3 col-md-4 col-sm-6 col-12">
                                            <Newsitem title={article.title.slice(0, 44) + '...'} desc={article.description.slice(0, 80) + '...'} imgUrl={article.urlToImage} readMore={article.url} />
                                        </div>
                                    )
                                }
                            })
                            :
                        <Loader />

                        }
                    </div>

                </div>
                <button className='btn btn-primary' onClick={getIn}>Get India</button>
            </>
        )
    }
}

export default News