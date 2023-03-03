// name: Deploy to Ubuntu Server

// on:
//   push:
//     branches: ["develop"]  
//   pull_request:
//     branches: ["develop"]

// jobs:
//   deploy:
//     runs-on: ubuntu-latest
//     steps:
//       - name: Checkout repository
//         uses: actions/checkout@v2

//       # - name: Install Node.js
//       #   uses: actions/setup-node@v2
//       #   with:
//       #     node-version: '16.x'

//       # - name: Build and test 
//       #   run: |
//       #     npm install
//       #     npm test 

//       - name: Deploy to server
//         uses: appleboy/ssh-action@v0.1.8
//         with:
//           host: ${{ secrets.SERVER_HOST }}
//           username: ${{ secrets.SERVER_USER }}
//           password: ${{ secrets.SERVER_PASSWORD }}
//           port: ${{ secrets.SERVER_PORT }}
//           script: whoami
//           script: |
//             echo "Deploying myapp to server..."
//             cd /var/www
//             git clone https://github.com/PiusKevin3/crud.git
//             cd crud
//             npm install
//             npm start
//             echo "Deployment complete!"




