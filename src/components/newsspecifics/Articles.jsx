import React, { useEffect, useState } from 'react'
import { useArticle } from '../../context/ArticleContext'
import { Link } from 'react-router-dom'

const Articles = () => {
    const { articles } = useArticle()

    const getMonth = (e) => {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return month[e-1]
    }

  return (
    <div className="container articles-container">
        <h2>Our News & Articles</h2>
        <div className="article-section">
            {
                articles.map(article => (
                    <Link to={`/news/${article.id}`} className="article-item" key={article.id}> 
                        <img src={article.imageUrl} />
                        <div className="absolute-date">
                            <h3>{article.published.slice(8, 10)}</h3>
                            <p>{getMonth(article.published.slice(5,7))}</p>
                        </div>
                        <p>{article.category}</p>
                        <h3>{article.author}</h3>
                        <p>{article.content}</p>
                    </Link>
                ))
            }
        </div>
        <div className="page-scroller">
            <a className="page-scroller-item">
                
                <i class="fa-solid fa-angle-left"></i>
            </a>
            <a className="page-scroller-item current">
                1
            </a>
            <a className="page-scroller-item">
                2
            </a>
            <a className="page-scroller-item">
                3
            </a>
            <a className="page-scroller-item">
                ...
            </a>
            <a className="page-scroller-item">
                9
            </a>
            <a className="page-scroller-item">
                <i class="fa-solid fa-angle-right"></i>
            </a>
        </div>
    </div>
  )
}

export default Articles