import { Media, MediaContextProvider } from "../media"

export default function HomePage({ custom }) {
  return (
    <MediaContextProvider>
      <Media at="xs">Hello mobile! {custom} </Media>
      <Media greaterThan="xs">Hello desktop!</Media>
    </MediaContextProvider>
  )
}

HomePage.getInitialProps = () => {
  return {
    custom: 1,
  }
}
