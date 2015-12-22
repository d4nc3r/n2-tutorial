System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    module: 'commonjs',
    emitDecoratorMetadata: true
  },
  packages: {
    // app: {
    //   format: 'register',
    //   defaultExtension: 'js'
    // }
    app: {
      // main: './app/app.component.js',
      defaultExtension: 'ts'
    }
  }
});
