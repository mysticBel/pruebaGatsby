
import * as React from "react"



// const BioComponent = () => {
//   const data = useStaticQuery(graphql`
//     query BioQuery {
//       site {
//         siteMetadata {
//           author {
//             name
//             summary
//           }
//           social {
//             twitter
//           }
//         }
//       }
//     }
//   `)


const Footer = () => {
  return (
    <div>
        <footer>
            © {new Date().getFullYear()}, All Rights Reserved 
            <a href="">Michito</a>
        </footer>
    </div>
  )
}

export default Footer




