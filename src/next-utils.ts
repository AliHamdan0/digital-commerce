import next from "next";

const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();

//Here, next() is a function provided by the next package.
//It's initializing an instance of the Next.js server, which you can then further configure
//and start to run your Next.js application.
