import UniversalHeader from "../../components/UniversalHeader";
import UniversalFooter from "../../components/UniversalFooter";

interface IPageTemplate {
  children?: JSX.Element
}

export default function PageTemplate({ children } : IPageTemplate): JSX.Element {
  return (
    <div>
      <UniversalHeader/>
      { children }
      <UniversalFooter/>
    </div>
  )
}