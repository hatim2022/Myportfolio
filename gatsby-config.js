var { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;
SPACE_ID="btjbqxtqwe28";
ACCESS_TOKEN="v9bZ0NSIxD-ejOMmKkcmU5nRVFsys7UXRSW5N_LHXF4";


const plugins = [
  {
    resolve: `gatsby-theme-mate`,
    options: {
      accessToken: ACCESS_TOKEN,
      spaceId: SPACE_ID,
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
};
