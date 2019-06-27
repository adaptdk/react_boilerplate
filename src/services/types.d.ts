declare module "RootTypes" {
  export type Services = typeof import("./index").default;
}
