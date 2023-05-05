import { useParams } from "react-router"

 export const withUrlParams = (Component) => {
    return props => <Component {...props} params={useParams()} />
  }