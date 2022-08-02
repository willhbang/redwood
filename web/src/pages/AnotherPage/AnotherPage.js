import { Link, routes } from '@redwoodjs/router'

const AnotherPage = () => {
  return (
    <>
      <h1>AnotherPage</h1>
      <p>
        Find me in <code>./web/src/pages/AnotherPage/AnotherPage.js</code>
      </p>
      <p>
        My default route is named <code>another</code>, link to me with `
        <Link to={routes.another()}>Another</Link>`
      </p>
    </>
  )
}

export default AnotherPage
