const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "home",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "home",
        filename: "remoteEntry.js",
        exposes: [{
            './Module': './src/app/topic/topic.module.ts',
        },{
          './WorksheetModule': './src/app/worksheet/worksheet.module.ts',
      }],      
          
<<<<<<< HEAD
        name: "worksheet",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './src/app/worksheet/worksheet.module.ts',
        },
        
        name: "homework",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './src/app/homework/homework.module.ts',
        },
=======
        // name: "worksheet",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './WorksheetModule': './src/app/worksheet/worksheet.module.ts',
        // },     
>>>>>>> df131e468a21d00a1d467b82a864eb85c776a23a
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
