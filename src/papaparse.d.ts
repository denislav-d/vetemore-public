declare module "papaparse" {
  const Papa: {
    parse: (
      input: string,
      options: {
        header: boolean;
      }
    ) => void;
  };
  export = Papa;
}
