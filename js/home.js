import React from 'react'
import ReactDOM from 'react-dom'

export function Home(){

  function mainPage() {
    const elementMain = (
      <section className="home_page">
        <h1 className="main_title">New Title</h1>
      </section>
    )
    ReactDOM.render(
      elementMain,
      document.getElementById("main")
    )
  }
  mainPage()
}
