import https from 'https';

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export default agent;