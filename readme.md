npm init -y

npm install express --save

npm install -D typescript

npx tsc --init ( omit and follow tsconfig.json of GitHub =
{ https://github.com/Shahriar-Shakil-Khan/Express_Server/blob/main/tsconfig.json })

npm i --save-dev @types/express

npm i -D tsx (Go to Package.json file and in script you will add ("dev": "npx tsx watch ./src/server.ts"))

npm i pg  ( database )
 
npm i --save-dev @types/pg

npm i dotenv

npm i --save-dev @types/node , npx tsc --init 

npm run dev

for password go to  Bcrypt ( npm i bcryptjs ) and go to jwt token ( npm i jsonwebtoken,npm i --save-dev @types/jsonwebtoken )

(Modular Pattern)--->RCS

![alt text](image.png)


How to deploy Backend Server 

tsc

Go to package.json and in scripts you will add (  “build”:”tsc”  )

npm run build

Vercel.com, Render.com (open create account)

npm i -g vercel

vercel login (verify account)

create vercel.json

deploy express typescript app to vercel 

https://medium.com/@hammadafzal1111/deploy-your-node-js-typescript-app-on-vercel-the-ultimate-guide-43cf7848cf09 

vercel --prod  =>press y


