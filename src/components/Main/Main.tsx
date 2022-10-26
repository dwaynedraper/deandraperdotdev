import React from 'react'
import NavBar from '../NavBar/NavBar'

interface MainProps {
  children: React.ReactNode
}

/**
 * Main is the main content area of the page. Its only job is to render the
 * children passed to it.
 * @param props {React.ReactNode} The children to render.
 * @returns <Main> component.
 */
export default function Main(props: MainProps) {
  return (
    <main className="page landing-page">
      {props.children}
    </main>
  )
}
