import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <header className='logo'>
        <h3>ポートフォリオ</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
            <Link to="blog">ブログ</Link>
            </li>
            <li>
              <a href='#'>SNS</a>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  )
}
