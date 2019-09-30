interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  __INITIAL_STATE__: any;
}

// CSS Modules Styling
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare const require: any;
