import Loadable from "react-loadable";

export interface IWidget {
  query: string;
  widget:
  | (React.ComponentClass<unknown, any> & Loadable.LoadableComponent)
  | (React.FunctionComponent<unknown> & Loadable.LoadableComponent);
}
