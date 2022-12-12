// components/layout.js

import Footer from "./footer";
import Header from "./header";

// import Navbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}