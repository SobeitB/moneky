module.exports = {
   webpack: {
      resolve: { 
         fallback: {
            https:require.resolve("https-browserify"),
            http:require.resolve("stream-http")
         }
      }    
   }
};